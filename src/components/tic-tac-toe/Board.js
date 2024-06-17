import React from "react";
import Square from "./Square"; // 從 Square 檔案中導入 Square 元件
import "./tictactoe.css"; // 導入 CSS 樣式檔案

// Board 元件負責渲染整個井字棋棋盤
function Board({ xIsNext, squares, onPlay }) {
  // 當某個格子被點擊時調用
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return; // 如果已經有贏家或格子已被佔用，則返回
    }
    const nextSquares = squares.slice(); // 複製當前的 squares 狀態
    if (xIsNext) {
      nextSquares[i] = "X"; // 根據當前玩家更新相應格子的值為 "X"
    } else {
      nextSquares[i] = "O"; // 根據當前玩家更新相應格子的值為 "O"
    }
    onPlay(nextSquares); // 調用父元件的 onPlay 回調函數，更新 squares 狀態
  };

  // 計算贏家的函數
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <= lines.length - 1; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a]; // 如果找到贏家，返回贏家的標誌 ("X" 或 "O")
    }
    return null; // 如果沒有贏家，返回 null
  };

  const winner = calculateWinner(squares); // 計算當前棋局的贏家
  let status = winner
    ? `贏家: ${winner}`
    : `下一個玩家: ${xIsNext ? "X" : "O"}`; // 根據是否有贏家設置狀態信息
  // let status;
  // if (winner) {
  //   status = "贏家 " + winner;
  // } else {
  //   status = "下一個玩家: " + (xIsNext ? "X" : "O");
  // }

  return (
    <>
      <div className="status">{status}</div> {/* 顯示當前棋局狀態 */}
      <div>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} /> {/* 渲染第 0 個格子 */}
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} /> {/* 渲染第 1 個格子 */}
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} /> {/* 渲染第 2 個格子 */}
      </div>
      <div>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} /> {/* 渲染第 3 個格子 */}
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} /> {/* 渲染第 4 個格子 */}
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} /> {/* 渲染第 5 個格子 */}
      </div>
      <div>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} /> {/* 渲染第 6 個格子 */}
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} /> {/* 渲染第 7 個格子 */}
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} /> {/* 渲染第 8 個格子 */}
      </div>
    </>
  );
}

export default Board;
