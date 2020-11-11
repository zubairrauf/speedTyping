import GameLogic from './gameLogic'

function App() {
    const {text, textRef, handleChange, gameRunning, timeRemaining, startGame, wordCount} = GameLogic(5)

    return(
        <div className='container'>
            <h1>Speed typing game</h1>
            <textarea
            ref={textRef} 
            className='textbox'
            value={text}
            onChange={handleChange}
            disabled={!gameRunning}
            />
            <h3>Time remaining: {timeRemaining}</h3>
            <button 
                className='btnstart'
                onClick={startGame}
                disabled={gameRunning}
            >
                {gameRunning ? 'Type...' : 'Start'}
            </button>
            <h1>Word count: {wordCount}</h1>
            </div>
    )
}

export default App
