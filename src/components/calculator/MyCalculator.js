import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

function MyCalculator() {
  // 使用 useState 鉤子來創建一個狀態變數 "result"，初始值為 "0"
  const [result, setResult] = useState("0");

  // handleClick 是 MyButton 的事件處理常式，用於處理按鈕點擊事件
  const handleClick = (value) => {
    // 根據按鈕的值執行不同的操作
    switch (value) {
      // 如果是數字或小數點或運算符，則更新顯示結果
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
        // 如果當前顯示結果是 "0"，則替換為按鈕的值，否則追加按鈕的值到現有結果
        if (result === "0") {
          setResult(value);
        } else {
          setResult(result + value);
        }
        break;

      // 如果是等號，則計算結果並更新顯示
      case "=":
        setResult(eval(result).toString());
        break;

      // 如果是清除按鈕，則將顯示結果設置為空
      case "c":
        setResult("");
        break;

      // 如果是正負號按鈕，則取相反數並更新顯示
      case "+/-":
        setResult(parseInt(result, 10) * -1);
        break;

      // 如果是百分比按鈕，則將顯示結果除以 100 並更新顯示
      case "%":
        setResult(parseInt(result, 10) / 100);
        break;

      // 預設情況下不做任何操作
      default:
        break;
    }
  };

  return (
    // 使用 "calculator" 類來設置計算器的樣式
    <div className="calculator">
      {/* 顯示計算結果 */}
      <MyDisplay result={result} />
      {/* 顯示按鈕面板，並將 handleClick 函數作為屬性傳遞給 MyButton 組件 */}
      <MyButton buttonClicked={handleClick} />
    </div>
  );
}

export default MyCalculator;
