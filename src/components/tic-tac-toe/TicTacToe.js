import React, { useState } from "react";
import Board from "./Board"; // 從 Board 檔案中導入 Board 元件
import "./tictactoe.css"; // 導入 CSS 樣式檔案

// TicTacToe 元件負責管理井字棋遊戲的整體狀態和邏輯
function TicTacToe() {
  // 初始化遊戲歷史狀態為一個包含九個 null 的陣列
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // 初始化當前步數為 0
  const [currentMove, setCurrentMove] = useState(0);
  // 獲取當前步數的棋盤狀態
  const currentSquares = history[currentMove];
  // 計算當前輪到的玩家，X 在偶數步時下棋，O 在奇數步時下棋
  const xIsNext = currentMove % 2 === 0;

  // 處理玩家下棋的函數
  const handlePlay = (nextSquares) => {
    // 更新遊戲歷史，保留到當前步數為止的歷史紀錄，加上新的一步
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // 更新遊戲歷史狀態
    setCurrentMove(nextHistory.length - 1); // 更新當前步數
  };

  // 跳轉到指定步數的函數
  const jumpTo = (nextMove) => setCurrentMove(nextMove);

  // 渲染遊戲歷史中的每一步，並生成對應的按鈕
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "回到第 " + move + " 步"; // 遊戲歷史中第 move 步的描述
    } else {
      description = "遊戲開始"; // 遊戲開始時的描述
    }
    return (
      // 使用 key 屬性來標識每個歷史步數，避免 React 渲染錯誤
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button> {/* 當按鈕被點擊時調用 jumpTo 函數 */}
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} /> {/* 渲染井字棋棋盤 */}
      </div>
      <div className="game-info">
        <h4>遊戲歷程</h4>
        <ol>{moves}</ol> {/* 顯示遊戲歷史 */}
      </div>
    </div>
  );
}

export default TicTacToe;
