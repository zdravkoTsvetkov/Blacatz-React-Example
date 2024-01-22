import React, {useState} from "react"

export default function Note({note, deleteNote, updateNote, index}) {

    const [isEdit, setIsEdit] = useState(false);
    const [updatedNote, setUpdatedNote] = useState(note);

    function showEditForm() {
        return (<>
            <input onChange={handleInputChange} className='form-control mb-3' type='text' name='title' value={updatedNote.title} />
            <textarea onChange={handleInputChange} type='text' className='form-control mb-3' name='content' value={updatedNote.content}></textarea>
            <button onClick={handleSaveClick} className='btn btn-success'>Запази</button>
        </>)
    }

    function handleSaveClick() {
        updateNote(index, updatedNote);
        setIsEdit(false);
    }

    function handleInputChange(event) {
        const {name, value} = event.target;
        setUpdatedNote({...updatedNote, [name]: value});
    }

    function showNoteInfo() {
        return (<>
            <h2>{updatedNote.title}</h2>
            <p>{updatedNote.content}</p>
        </>)
    }

    function handleEditClick() {
        setIsEdit(true);
    }

    return (
        <div>
            <div className='row mt-3'>
                <div className='col-8'>
                    {isEdit ? showEditForm() : showNoteInfo()}
                    
                </div>
                <div className='col-4'>
                    <button onClick={() => handleEditClick() } className='btn btn-warning text-white fw-bold me-3'>
                        <i className='fa fa-pencil'></i>
                        &nbsp; Редакция
                    </button>
                    <button onClick={() => {setIsEdit(false);deleteNote(index)}} className='btn btn-danger text-white fw-bold'>
                        <i className='fa fa-times'></i>
                        &nbsp; Изтриване
                    </button>
                </div>
            </div>
        </div>
    )
}