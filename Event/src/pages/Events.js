import React, { useEffect, useState } from 'react'

export default function Events() {
  const [content, setContent] = useState(<EventList showForm={showForm} />);


  function showForm(event) {
    setContent(<EventForm event={event} showList={showList} />);
  }


  function showList() {
    setContent(<EventList showForm={showForm} />);
  }

  return (
    <div className="container bg-light shadow p-3 mb-5 bg-body rounded">
      {content}
    </div>
  );
}

function EventList(props) {
  const [events, setEvents] = useState([]);

  function fetchEvents() {
    fetch('http://localhost:3001/events')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error.");
        }
        return response.json()
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.log("Error: ", error));
  }

  
  useEffect(() => fetchEvents(), []);

  function deleteEvent(id) {
    fetch('http://localhost:3001/events/' + id, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => fetchEvents());
  }

  return (
    <>
      <h2 className="text-center mb-5">Events Page</h2>

      <table className="table">
        <thead>
          <tr>
            <th>№:</th>
            <th>Date:</th>
            <th>Hour:</th>
            <th>Place:</th>
            <th>Description:</th>
            <th>Created:</th>
            <th>Options:</th>
          </tr>
        </thead>
        <tbody>

          {
            events.map((event, index) => {
              return (
                <tr key={index}>
                  <td>{event.id}</td>
                  <td>{event.date}</td>
                  <td>{event.time}</td>
                  <td>{event.place}</td>
                  <td>{event.description}</td>
                  <td>{event.createdAt}</td>
                  <td td style={{ width: '10px', whiteSpace: 'nowrap' }}>
                    <button onClick={() => props.showForm(event)} type="button" className="btn btn-info btn-sl me-1">Edit</button>
                    <button onClick={() => deleteEvent(event.id)} type="button" className="btn btn-danger btn-sl">Delete</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      <button onClick={() =>
        props.showForm({})}
        type="button"
        className="btn btn-outline-primary ">Add</button>
      <button onClick={() => fetchEvents()} type="button" className="btn btn-outline-primary me-2 m-1">Refresh</button>
    </>

  );
}

function EventForm(props) {
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    

    const event = Object.fromEntries(formData.entries());

    

    if (!event.date || !event.time || !event.place) {
      console.log("Моля попълнете полетата!");
      setErrorMessage(
        <div className="alert alert-warning text-center" role="alert">
          Моля попълнете полетата!
        </div>
      )
      return;
    }

    if (props.event.id) {
      
      fetch('http://localhost:3001/events/' + props.event.id, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json()
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Грешка: ", error);
        });
    }
    else {


      

      event.createdAt = new Date().toISOString().slice(0, 10);
      fetch('http://localhost:3001/events', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event)
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error");
          }
          return response.json()
        })
        .then((data) => props.showList())
        .catch((error) => {
          console.error("Грешка: ", error);
        });
    }
  }

  return (
    <>
      <h2 className="text-center mb-3">{props.event.id ? "Edit event" : "Create new event"}</h2>
      <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Close</button>

      <div className="row">
        <div className="col-lg-6 mx-auto">

          {errorMessage}

          <form onSubmit={(e) => handleSubmit(e)}>

            {props.event.id && <div className="row mb-3">
              <label className="col-sm-4 col-form-label">№:</label>
              <div className="col-sm-8">
                <input readOnly className="form-control-plaintext"
                  name="id"
                  defaultValue={props.event.id} />
              </div>
            </div>}

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Date:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="date"
                  defaultValue={props.event.date} />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Hour:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="time"
                  defaultValue={props.event.time} />
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Place:</label>
              <div className="col-sm-8">
                <select className="form-select"
                  name="place"
                  defaultValue={props.event.place}>
                  <option value='Офис'>Офис</option>
                  <option value='Зала 1'>Зала 1</option>
                  <option value='Зала 2'>Зала 2</option>
                  <option value='Конферентна зала 1'>Конферентна зала 1</option>
                  <option value='Конферентна зала 2'>Конферентна зала 2</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
              <label className="col-sm-4 col-form-label">Description:</label>
              <div className="col-sm-8">
                <input className="form-control"
                  name="description"
                  defaultValue={props.event.description} />
              </div>
            </div>

            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid">
                <button type="submit" className="btn btn-primary btn-sm me-3">Save</button>
              </div>
              <div className="col-sm-4 d-grid">
                <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Close</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}