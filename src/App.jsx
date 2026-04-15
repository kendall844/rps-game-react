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
    const [resetKey, setResetKey] = useState(0);
    

    const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice);
        setCompChoice(null);
        setResult("");
    };

    const resetAll = () => {
        setPlayerChoice(null);
        setCompChoice(null);
        setResult("");
        setResetKey(prev => prev + 1);
    };

    return (
        <div className="app">
            <h1>Rock Paper Scissors</h1>
            <PlayerThrow setPlayerChoice={handlePlayerChoice} />

            <ComputerThrow playerChoice={playerChoice} setCompChoice={setCompChoice} />

            <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} setResult={setResult} />

            <ScoreBoard result={result} resetKey={resetKey}/>

            <ResetButton resetGame={resetAll} />

        </div>
    );
}

export default App;