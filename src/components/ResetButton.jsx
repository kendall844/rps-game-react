function ResetButton({ setPlayerChoice, setCompChoice, setResult }) {
    const resetGame = () => {
        setPlayerChoice(null);
        setCompChoice(null);
        setResult("");
        setScore({ wins: 0, losses: 0, ties: 0 });
    };

    return (
        <button id="resetBtn" onClick={resetGame}>
            Reset Game
        </button>
    );
}

export default ResetButton;