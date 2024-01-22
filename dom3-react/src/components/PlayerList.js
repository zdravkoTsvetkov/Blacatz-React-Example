import React, {useState} from 'react';
import Player from './player';

const PlayerList = ({players}) => {
    const [totalRating, setTotalRating] = useState(0);


const handleRatingChange = (change) => {
    setTotalRating(totalRating + change);
};


  return (
    <div className="player-list">
        <p>Общ рейтинг: {totalRating}</p>
      <table>
        <thead>
          <tr>
            <th>Име</th>
            <th>Рейтинг</th>
            <th>Позиция</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <Player
              key={index}
              name={player.name}
              rating={player.rating}
              position={player.position}
              onRatingChange={handleRatingChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
