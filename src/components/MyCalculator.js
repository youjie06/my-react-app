import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

function MyCalculator() {
  const [result, setResult] = useState("0"); // 使用 useState 鉤子來追蹤計算機的結果，初始為 "0"

  // 按鈕點擊事件處理函式
  const handleClick = (value) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "*":
      case "/":
        // 如果結果為 "0"，則直接設置為當前按鈕值；否則將當前按鈕值添加到結果後面
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;
      case "=":
        // 使用 eval 函式計算結果並轉為字串
        setResult(eval(result).toString());
        break;
      case "c":
        // 清除結果
        setResult("");
        break;
      case "+/-":
        // 切換結果的正負號
        setResult(parseInt(result, 10) * -1);
        break;
      case "%":
        // 將結果除以 100
        setResult(parseInt(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator">
      {/* 將結果傳遞給 MyDisplay 組件顯示 */}
      <MyDisplay result={result} />
      {/* 將點擊事件處理函式傳遞給 MyButton 組件 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;
