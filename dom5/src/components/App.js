import React, { useState } from 'react';
import Note from './Note';

export default function App() {
    const [notes, setNotes] = useState([])

    function addNote() {
        var note = {title: 'Добави бележка', content: 'Добави съдържание'};
        setNotes([note, ...notes]);
    }

    function deleteNote(index) {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
    }

    function updateNote(index, updatedNote) {
        const updatedNotes = notes.map((note, i) => {
            if(i == index) {
                return updateNote;
            }
            return note;
        })
    }

    return (
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-12'>
                    <button onClick={addNote} className='btn btn-primary'>Добави бележка</button>
                </div>
                <div className='col-12'>
                    {notes.map((note, index) => (
                        <Note 
                           key={index}
                           note={note}
                           deleteNote={deleteNote}
                           updateNote={updateNote}
                           index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}