import { useEffect, useState } from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

import "./App.css";

function App() {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setCompChoice] = useState(null);
    const [result, setResult] = useState("");

    const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

    const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice);
        setCompChoice(null);
        setResult("");
    };

    useEffect(() => {
        if (!result) {
            return;
        }
        setScore((prev) => {
            if (result === "Player Wins") {
                return { ...prev, wins: prev.wins + 1 };
            } else if (result === "Player Loses") {
                return { ...prev, losses: prev.losses + 1 };
            } else {
                return { ...prev, ties: prev.ties + 1 };
            }
        });
    }, [result]);

    const resetGame = () => {
        setPlayerChoice(null);
        setCompChoice(null);
        setResult("");
        setScore({ wins: 0, losses: 0, ties: 0 });
    };

    return (
        <div className="app">
            <h1>Rock Paper Scissors</h1>
            <PlayerThrow setPlayerChoice={handlePlayerChoice} />

            <ComputerThrow playerChoice={playerChoice} setCompChoice={setCompChoice} />

            <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} setResult={setResult} />

            <ScoreBoard score={score} resetGame ={resetGame}/>

            <ResetButton resetGame={resetGame}/>

        </div>
    );
}

export default App;