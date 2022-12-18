import { useState, useEffect, useRef } from "react";

function useLogic() {
    const STARTING_TIME = 5

  /* words in the text area */
    const [words, setWords] = useState('')
    const textareaRef = useRef(null)
    
    function handleChange(e){
        const{name, value} = e.target
        setWords(value)
    }
    
    const [timeRemainig, setTimeRemaining] = useState(STARTING_TIME)
    const [hasStarted, setHasStarted] = useState(false)
    const [wordsTyped, setWordsTyped] = useState(0)
    /* useRef for making focus in textarea after click start */
    
    


    useEffect(()=>{
        if(hasStarted){
        
        if(timeRemainig===0){
            endGame()
        return
        }
        setTimeout(()=>{
        setTimeRemaining(prevState => prevState-1)
        },1000)
    }}
    ,[timeRemainig, hasStarted])
    

    function wordCount(){
        let wordsArray = words.split(' ')
        let nonBlankWords=wordsArray.filter(word => word !=='')
        return nonBlankWords.length
    }

    function beginGame(){
        textareaRef.current.disabled =false
        textareaRef.current.focus()
        /* allow restart without refresh */
        if(timeRemainig===0){
        setTimeRemaining(STARTING_TIME)
        setWords('')
        }
        setHasStarted(true)
    }

    function endGame(){
        setHasStarted(false)
        setWordsTyped(wordCount())
        
    }

    return {handleChange, wordsTyped, beginGame, timeRemainig,words, hasStarted, textareaRef}

}

export default useLogic