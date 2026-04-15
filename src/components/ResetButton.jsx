function ResetButton({ resetGame}){
    return (
        <button id= "resetBtn" onClick={resetGame}>
            Reset Game
        </button>
    );
}

export default ResetButton;