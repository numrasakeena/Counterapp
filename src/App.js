import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="container">
     <div className='card text-center'>
      <div className='card-body'>
      <h1> Counter App </h1>
       <h2 className=''>{count}</h2>
       <button className='btn1 btn-success' onClick={() => setCount(count + 1)}>Increment</button>
       <button className='btn2 btn-danger' onClick={() => setCount(count - 1)} disabled={count ===0}>Decrement</button>
       <button className='btn3 btn-secondary' onClick={() => setCount(0)} disabled={count ===0}>Reset</button>
      </div>
     </div>
    </div>


  );
}

export default App;
