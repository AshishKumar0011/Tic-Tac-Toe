import { useState } from "react";

const BoardP = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState("");

  const checkWinner = (state) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c])
        return true;
    }
    return false;
  };

  const handleClick = (index) => {
    const copy = Array.from(state);
    if (copy[index] !== null) return;
    copy[index] = turn;
    setState(copy);
    const win = checkWinner(copy);
    if (win) {
      setWinner(turn);
      setTimeout(() => {
        reset();
      }, 1000);
      return;
    }

    const tie = copy.every((cell) => cell !== null);
    if (tie) {
      setWinner("It's a Tie! Play again");
      return;
    }
    setTurn(turn === "X" ? "O" : "X");
  };

  const reset = () => {
    setState(Array(9).fill(null));
    setTurn("X");
    setWinner("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl border-b-4 text-center m-2">Tic-Tac-Toe</h1>
        <h1 className="text-3xl text-center m-2">Winner : {winner} </h1>
        <div>
          <div className="flex gap-2 m-2">
            <div
              className="flex justify-center items-center text-9xl h-[180px] w-[180px] border-2"
              onClick={() => {
                handleClick(0);
              }}
            >
              {state[0]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(1);
              }}
            >
              {state[1]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(2);
              }}
            >
              {state[2]}
            </div>
          </div>
          <div className="flex gap-2 m-2">
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(3);
              }}
            >
              {state[3]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(4);
              }}
            >
              {state[4]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(5);
              }}
            >
              {state[5]}
            </div>
          </div>
          <div className="flex gap-2 m-2">
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(6);
              }}
            >
              {state[6]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(7);
              }}
            >
              {state[7]}
            </div>
            <div
              className="h-[180px] flex justify-center items-center text-9xl w-[180px] border-2"
              onClick={() => {
                handleClick(8);
              }}
            >
              {state[8]}
            </div>
          </div>
        </div>
        <button
          className="text-2xl p-3 bg-red-500 w-[150px] rounded-full hover:bg-red-600 hover:scale-105 transition"
          onClick={() => {
            reset();
          }}
        >
          RESET
        </button>
      </div>
    </>
  );
};

export default BoardP;
