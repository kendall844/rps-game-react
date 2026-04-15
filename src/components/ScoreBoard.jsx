function ScoreBoard({ score }){
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