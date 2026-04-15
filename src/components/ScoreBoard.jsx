import { useState, useEffect } from "react";

function ScoreBoard({ result }) {
    const [score, setScore] = useState({ wins: 0, losses: 0, ties: 0 });

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
    return (
        <div className="scoreboard">
            <h3>Current Score</h3>
            <p>Wins: {score.wins}</p>
            <p>Losses: {score.losses}</p>
            <p>Ties: {score.ties}</p>
        </div>
    );
}

export default ScoreBoard;