import React, { useState } from "react";
import Board from "./Board"; // 引入棋盤組件
import "./tictactoe.css"; // 引入遊戲的 CSS 樣式

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // 使用狀態管理遊戲歷史記錄，初始為一個填充為null的9個元素的陣列
  const [currentMove, setCurrentMove] = useState(0); // 使用狀態管理當前步數，初始為0
  const currentSquares = history[currentMove]; // 當前棋盤狀態為歷史記錄中的第currentMove步
  const xIsNext = currentMove % 2 === 0; // 判斷下一步是X還是O，基於currentMove的奇偶性來決定

  // 處理玩家下棋的函式，接收更新後的棋盤狀態
  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // 構建下一個歷史記錄，將當前步數之後的歷史記錄截斷並添加新的棋盤狀態
    setHistory(nextHistory); // 更新歷史記錄
    setCurrentMove(nextHistory.length - 1); // 更新當前步數為最後一步
  };

  return (
    <div className="game"> {/* 遊戲容器 */}
      <div className="game-board"> {/* 遊戲棋盤 */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* 棋盤組件 */}
      </div>
    </div>
  );
}

export default TicTacToe; // 導出組件
