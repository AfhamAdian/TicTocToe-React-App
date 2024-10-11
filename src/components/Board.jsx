import React, { useState,useEffect } from "react";

import Square from "./Square"

const boardContainerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "300px",
    width: "300px",
}

const Board = () => {
        
    const [state, setState] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (index) => {
      const copyState = [...state];
      copyState[index] = xIsNext ? "X" : "O";
      setState(copyState);
      setXIsNext(!xIsNext);
    };

    const checkWinner = () => {
        const winStates = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
    
        for (let i = 0; i < winStates.length; i++) {
            const [a, b, c] = winStates[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return true;
            }
        }
        return null;
    }

    const hasWinner = checkWinner();

    return (
      <div>
        {hasWinner ? (
            <>
                <h2>{hasWinner ? "X" : "O"} is the winner</h2>
                <button onClick={()=>{
                    setState(Array(9).fill(null));
                    setXIsNext(true);
                }}>Play Again</button>
            </>
        ) : (
          <>
            <h1>Board</h1>
            <div className="board-container" style={boardContainerStyle}>
              <div className="board-row" >
                <Square value={state[0]} onClick={() => handleClick(0)} />
                <Square value={state[1]} onClick={() => handleClick(1)} />
                <Square value={state[2]} onClick={() => handleClick(2)} />
              </div>
              <div className="board-row" >
                <Square value={state[3]} onClick={() => handleClick(3)} />
                <Square value={state[4]} onClick={() => handleClick(4)} />
                <Square value={state[5]} onClick={() => handleClick(5)} />
              </div>
              <div className="board-row" >
                <Square value={state[6]} onClick={() => handleClick(6)} />
                <Square value={state[7]} onClick={() => handleClick(7)} />
                <Square value={state[8]} onClick={() => handleClick(8)} />
              </div>
            </div>
          </>
        )}
      </div>
    );
}

export default Board;