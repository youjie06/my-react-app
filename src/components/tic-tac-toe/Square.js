import React from "react";
import "./tictactoe.css";

// Square 元件負責渲染單個井字棋的格子
function Square({ value, onSquareClick }) {
  return (
    // 按鈕元素代表井字棋的格子，綁定點擊事件處理函數 onSquareClick
    <button className="square" onClick={onSquareClick}>
      {value} {/* 顯示格子內的值 (X, O, 或者空) */}
    </button>
  );
}

export default Square;
