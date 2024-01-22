import React from 'react';

export default function Input(props) {
    const styles = {
        title: {
            fontWeight: 700,
            textTransform: 'uppercase'
        }
    }

    return (
        <div>
            <label styles={styles.title}>
                {props.title}
            </label>
            <input type="text"
                   placeholder={props.placeholder}
                   onInput={props.onInput}
            ></input>
        </div>
    );
}