import React from 'react';

export default function Contacts(props) {
    const styles = {
        container: {
            padding: 20,
            background: '#333'
        },
        innerContainer: {
            display: 'flex',  
            alignItems: 'center',
            marginBottom: 10
        },
        img: {
            height: 45,
            
        },
        nameContainer: {
            color: 'white',
            marginLeft: 10
        },
        circle: {
            width: 15,
            height: 15,
            background: 'green',
            borderRadius: '50%',
            position: 'absolute',
            right: 0,
            bottom: 5
        }
    };

    function renderSingleContact(contact) {
        return (
            <div style={styles.innerContainer}>
                <div style={{ ...styles.innerContainer, position: 'relative' }}>
                    <img alt="" style={styles.img} src={contact.avatar} />
                    <div style={{ ...styles.circle, background: contact.status ? 'green' : 'red' }}></div>
                </div>
                <div style={styles.nameContainer}>
                    {contact.name}
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            {props.contacts.map(renderSingleContact)}
        </div>
    );
}
