import React from "react";
import Square from "./Square"; // 引入方格元件
import "./tictactoe.css"; // 引入遊戲樣式表

function Board({ xIsNext, squares, onPlay }) {
  // 點擊事件處理函式，根據玩家輪次更新方格內容
  const handleClick = (i) => {
    const nextSquares = squares.slice(); // 複製當前方格陣列
    if (xIsNext) {
      nextSquares[i] = "X"; // 如果是 X 玩家的輪次，則更新方格內容為 X
    } else {
      nextSquares[i] = "O"; // 如果是 O 玩家的輪次，則更新方格內容為 O
    }
    onPlay(nextSquares); // 調用父組件傳入的 onPlay 函數，將更新後的方格陣列傳遞給父組件
  };

  let status = "下一個玩家: " + (xIsNext ? "X" : "O"); // 顯示下一個玩家是 X 還是 O
  return (
    <>
      <div className="status">{status}</div> {/* 顯示遊戲狀態 */}
      <div>
        {/* 顯示第一行方格 */}
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div>
        {/* 顯示第二行方格 */}
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div>
        {/* 顯示第三行方格 */}
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
