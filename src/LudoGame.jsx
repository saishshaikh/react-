import { useState } from "react";

function LudoGame () {

  let [moves, setmoves] = useState({ Blue: 0, Red: 0, Orange: 0, purple: 0 });

  let updateBlue = () => {
    setmoves ((preMoves) => {
         return {...preMoves, Blue: preMoves.Blue +1}
    })
  };

    let updateRed = () => {
    setmoves ((preMoves) => {
         return {...preMoves, Red: preMoves.Red +1}
    })
  };
    
      let updateOrange = () => {
    setmoves ((preMoves) => {
         return {...preMoves, Orange: preMoves.Orange +1}
    })
  };

    let updatepurple = () => {
    setmoves ((preMoves) => {
         return {...preMoves, purple: preMoves.purple +1}
    })
  };



  return (
    <div className="Board">
      <p>BLUE MOVES={moves.Blue}</p>
      <button
        style={{ backgroundColor: "Blue" }}
        onClick={updateBlue}
      >
        +1
      </button>

      <p>RED MOVES= {moves.Red}</p>
      <button style={{ backgroundColor: "Red" }} onClick={updateRed}>+1</button>

      <p>ORANGE MOVES= {moves.Orange}</p>
      <button style={{ backgroundColor: "Orange" }} onClick={updateOrange}>+1</button>

      <p>PURPLE MOVES={moves.purple}</p>
      <button style={{ backgroundColor: "purple" }}onClick={updatepurple}>+1</button>
    </div>
  );
}

export default LudoGame;
