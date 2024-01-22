import React from 'react';
import PlayerList from './components/PlayerList';

const players = [
  { name: 'Player 1', rating: 0, position: 'Нападател' },
  { name: 'Player 2', rating: 0, position: 'Защитник' },
  { name: 'Player 3', rating: 0, position: 'Вратар' },
];

const App = () => {
  return (
    <div className = "app">
      <h1>Списък с играчи</h1>
      <PlayerList players = {players} />
    </div>
  );
};

export default App;










// const App = () => {
  //return (
    //<div>
      //<ProductList />
    //</div>
  //);
//};

//export default App;






// import Quote from './components/quote';


// function App() {
//   const [quotes, setQuotes] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/quotes?limit=10')
//       .then(response => response.json())
//       .then(data => setQuotes(data))
//       .catch(error => {
//         console.error('Error fetching quotes:', error);
//       });
//   }, []);

//   return (
//     <div className="App">
//       <h1>Цитати</h1>
//       {quotes.map((quote, index) => (
//         <Quote key={index} text={quote.text} author={quote.author} />
//       ))}
//     </div>
//   );
// }

// export default App;