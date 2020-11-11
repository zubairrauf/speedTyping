import { useState, useEffect, useRef } from 'react'

function GameLogic(gameTime = 5) {
    const [text, setText] = useState('')
    const [wordCount, setWordCount] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(gameTime)
    const [gameRunning, setGameRunning] = useState(false)
    const textRef = useRef(null)

    const handleChange = (e) => {
        const {value} = e.target
        setText(value)
    }

    const startGame = () => {
        setGameRunning(true)
        setTimeRemaining(gameTime)
        setText('')
        textRef.current.disabled = false
        textRef.current.focus()
        console.log('Ref' + textRef)
    }
    
    const endGame = () => {
        setGameRunning(false)
        countWords(text)
    }

    const countWords = (str) => {      
        setWordCount(str.trim().split(" ").filter(word => word !== "").length)
    }

    useEffect(() => {
        if(gameRunning && timeRemaining > 0) {
            setTimeout(() => setTimeRemaining(prevTime =>  prevTime - 1), 1000)
        } else if(timeRemaining === 0){
           endGame()
        }
    }, [gameRunning, timeRemaining]) 

    return {text, textRef, handleChange, gameRunning, timeRemaining, startGame, wordCount}
}

export default GameLogic
