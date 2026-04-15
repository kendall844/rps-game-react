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

      const handlePlayerChoice = (choice) => {
        setPlayerChoice(choice);
        setCompChoice(null);
        setResult("");
    };



    return (
        <div className="app">
            <h1>Rock Paper Scissors</h1>
            <PlayerThrow setPlayerChoice={handlePlayerChoice} />

            <ComputerThrow playerChoice={playerChoice} setCompChoice={setCompChoice} />

            <ResultDisplay playerChoice={playerChoice} computerChoice={computerChoice} result={result} setResult={setResult} />

            <ScoreBoard result={result}/>

            <ResetButton setPlayerChoice={setPlayerChoice} setCompChoice={setCompChoice} setResult={setResult}/>

        </div>
    );
}

export default App;