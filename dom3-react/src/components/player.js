import React, {useState} from 'react';

const Player = ({ name, rating, position, onRatingChange }) => {
    const [playerRating, setPlayerRating] = useState(rating);

    const increaseRating = () => {
        setPlayerRating(playerRating + 1);
        onRatingChange(1);
    };

    const decreaseRating = () => {
        setPlayerRating(playerRating -1 );
        onRatingChange(-1);
    };

    



    return (
        
        <tr>
            <td>{name}</td>
            <td>{playerRating}</td>
            <td>{position}</td>
            <td>
                <button onClick = {increaseRating}>+</button>
                <button onClick = {decreaseRating}>-</button>
            </td>
        </tr>
    );
};

export default Player;