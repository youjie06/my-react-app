import React from "react";
import "./tictactoe.css"; // 引入遊戲樣式表

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
