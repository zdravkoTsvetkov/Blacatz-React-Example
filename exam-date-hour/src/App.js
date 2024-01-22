import React from 'react';
import  ReactDOM  from 'react';
import DateTimeDisplay from './components/DateHour';

function App() {
  return (
    <div>
      <h1>Демонстрация на текуща дата и час</h1>
      <DateTimeDisplay />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
