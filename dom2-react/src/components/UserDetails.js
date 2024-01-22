import React from 'react';

export default function UserDedatils(props) {
    return (
        <>
        <h2>{props.name} - {props.name}</h2>
        <ul>
            {props.interests.map(i => <li>{i}</li>)}
        </ul>
        </>
    );
}