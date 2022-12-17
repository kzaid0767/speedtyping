import './App.css';
import { useState } from 'react';


function App() {

  const [words, setWords] = useState('')

  function handleChange(e){
    const{name, value} = e.target
    setWords(value)
  }

  function wordCount(){
    let wordsArray = words.split(' ')
    let nonBlackWords=[]
    for(let word of wordsArray){
      if(word !==''){
        nonBlackWords.push(word)
      }
    }
    console.log(nonBlackWords.length)
  }

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea 
        name='text'
        value={words.value}
        onChange={handleChange}
      />
      <h4>Time Remaining</h4>
      <button onClick={wordCount}>Start</button>
      <h1>Word Count</h1>
    </div>
  );
}

export default App;
