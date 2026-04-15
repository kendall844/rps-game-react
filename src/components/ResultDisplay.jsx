import { useEffect } from "react";

function ResultDisplay({ playerChoice, computerChoice, result, setResult}){
     useEffect(() => {
        if (!playerChoice || !computerChoice)
            return;

        if (playerChoice === computerChoice){
            setResult("Tie");
        
        }else if(
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ){
            setResult("Player Wins");
        }else {
            setResult("Player Loses");
        }
        }, [playerChoice, computerChoice]);
        return <h2>{result}</h2>
    }

    export default ResultDisplay;