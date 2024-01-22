import React, {useState} from 'react';

export default function App() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type='text' onInput={(e) => {
                        setName(e.target.value);
                    }}></input>
                    {name.length < 3 ? 'Name is required' : ''}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' onInput={(e) => {
                        setEmail(e.target.value);
                    }}></input>
                    {email.length < 1 ? 'Email is required' : ''}
                </div>
                <div>
                    <label>Subject</label>
                    <input type='text' onInput={(e) => {
                        setSubject(e.target.value);
                    }}></input>
                    {subject.length < 10 ? 'Subject is required min 10 symbols' : ''}
                </div>
                <div>
                    <label>Message</label>
                    <textarea onInput={(e) =>{
                        setMessage(e.target.value);
                    }}></textarea>
                    {message.length < 1 ? 'Message is required' : ''}
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

