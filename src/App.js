import './App.css';
import { useState, useEffect, useRef } from 'react';
import useLogic from './useLogic';


function App() {

  const {handleChange, wordsTyped, beginGame, timeRemainig,words, hasStarted, textareaRef} = useLogic()
  //const textareaRef = useRef(null)

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea
        ref={textareaRef} 
        name='text'
        disabled={!timeRemainig}
        value={words}
        onChange={handleChange}
      />
      <h4>Time Remaining: {timeRemainig}</h4>
      <button  disabled={hasStarted} onClick={beginGame}>Start</button>
      <h1>Word Count: {!timeRemainig?wordsTyped:''}</h1>
    </div>
  );
}

export default App;
