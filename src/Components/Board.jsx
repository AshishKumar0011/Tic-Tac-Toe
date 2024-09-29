import { useState } from "react";

const Board = () => {
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

  const handleBlockClick = (index) => {
    const copy = Array.from(state);
    if (copy[index] !== null) return;
    copy[index] = turn;
    setState(copy);
    const win = checkWinner(copy);

    if (win) {
      setWinner(turn);
      setTimeout(() => {
        resetGame();
      }, 1000);
      return;
    }

    const isTie = copy.every(cell => cell !== null);
    if (isTie) {
      setWinner("It's a Tie! Play again");
      return;
    }

    setTurn(turn === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setState(Array(9).fill(null));
    setTurn("X");
    setWinner("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl border-b-4 text-center m-2">Tic-Tac-Toe</h1>
      <h1 className="text-3xl text-center m-2">Winner : {winner}</h1>
      <div className="flex w-[564px] h-[600px] m-auto">
        <div className="space-y-2">
          <div
            className=" text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(0);
            }}
          >
            {state[0]}
          </div>
          <div
            className=" text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(1);
            }}
          >
            {state[1]}
          </div>
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(2);
            }}
          >
            {state[2]}
          </div>
        </div>
        <div className="space-y-2">
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(3);
            }}
          >
            {state[3]}
          </div>
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(4);
            }}
          >
            {state[4]}
          </div>
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(5);
            }}
          >
            {state[5]}
          </div>
        </div>
        <div className="space-y-2">
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(6);
            }}
          >
            {state[6]}
          </div>
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(7);
            }}
          >
            {state[7]}
          </div>
          <div
            className="text-9xl flex bg-green-950 h-[180px] w-[180px] rounded-md cursor-pointer border-2 border-sky-500 m-1 justify-center items-center"
            onClick={() => {
              handleBlockClick(8);
            }}
          >
            {state[8]}
          </div>
        </div>
      </div>
      <button
        className="text-2xl p-3 bg-red-500 w-[150px] rounded-full hover:bg-red-600 hover:scale-105 transition"
        onClick={() => {
          resetGame();
        }}
      >
        RESET
      </button>
    </div>
  );
};
export default Board;

