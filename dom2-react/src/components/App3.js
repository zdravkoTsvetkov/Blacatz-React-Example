import React, {useState} from 'react';
import './App3.css';
import Contacts from './Contacts';

export default function App3() {
    const [contacts, setContacts] = useState([
        { name: 'Georgi Petkov', avatar: '/img/58028.png', status: true },
        {name: 'Nikola Atanasov', avatar: '/img/58029.png', status: false},
        {name: 'Maria Stanilova', avatar: '/img/58031.png', status: true},
    ]);
    return (
        
        <div>
            <Contacts contacts={contacts } />
        </div>
        
    );
}