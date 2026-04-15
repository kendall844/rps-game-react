import { useState, useEffect } from "react";

const choices = ["rock", "paper", "scissors"];

function ComputerThrow({ playerChoice, setCompChoice }) {
    const [display, setDisplay] = useState("question-mark");

    useEffect(() => {
        if (!playerChoice){
            setDisplay("question-mark");
        return;
        }
        setDisplay("question-mark");
        let count = 0;

        const interval = setInterval(() => {
            const random = choices[Math.floor(Math.random() * 3)];
            setDisplay(random);
            count++;
        }, 500);
        setTimeout(() => {
            clearInterval(interval);
            const finalChoice = choices[Math.floor(Math.random() * 3)];
            setDisplay(finalChoice);
            setCompChoice(finalChoice);
        }, 3000);

        return () => clearInterval(interval);
    }, [playerChoice]);

    return (
        <div>

            <img src={`/images/${display}.png`} />
        </div>
    );
}
export default ComputerThrow;