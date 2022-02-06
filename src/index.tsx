import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  let num = 23;
  return (
    <h1>Yo!!!!!!???{num}</h1>
  )
}

const root = document.getElementById('root'); 
ReactDOM.render(<App/>, root);