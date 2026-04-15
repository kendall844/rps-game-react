import { useState } from "react";

function PlayerThrow({ setPlayerChoice }) {
    const [selected, setSelected] = useState(null);

    const handleClick = (choice) => {
        setSelected(choice);
        setPlayerChoice(choice);
    };

    return (
        <div>
            <img src="/images/rock.png" onClick={() => handleClick("rock")} />
            <img src="/images/paper.png" onClick={() => handleClick("paper")} />
            <img src="/images/scissors.png" onClick={() => handleClick("scissors")} />

        </div>
    );
}
export default PlayerThrow;