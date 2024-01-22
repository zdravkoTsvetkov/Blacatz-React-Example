import React, {useState} from 'react';
import './App2.css';
import UserDedatils from './UserDetails';

export default function App2() {
    const [users, setUsers] = useState ([
        {name: 'Gosho', age: 20, interests: ['js','react','php']},
        {name: 'Pesho', age: 25, interests: ['chess','hbo']}
    ]);

    return (
        <div>
            {users.map(user =>
                <UserDedatils
                name={user.name}
                age={user.name}
                interests={user.interests}
                />
            )}
        </div>
    )
}

