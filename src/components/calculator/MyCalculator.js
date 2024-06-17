import React, { useState } from "react";
import MyDisplay from "./MyDisplay";
import MyButton from "./MyButton";
import "./MyCalculator.css";

// MyCalculator 元件是計算器的主元件
function MyCalculator() {
  const [result, setResult] = useState("0"); // 使用 useState 鉤子來管理計算結果的狀態

  // handleClick 函數是 MyButton 元件的事件處理函式
  const handleClick = (value) => {
    // alert(value); // 調試用途，彈出提示框顯示按鈕值
    switch (value) {
      // 處理數字和基本運算符的情況
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
        if (result === "0") {
          setResult(value); // 如果當前結果是 "0"，將其替換為新值
        } else {
          setResult(result + value); // 否則，將新值附加到當前結果後面
        }
        break;
      case "=":
        setResult(eval(result).toString()); // 使用 eval 函數計算結果並更新狀態
        break;
      case "c":
        setResult(""); // 清除當前結果
        break;
      case "+/-":
        setResult((parseFloat(result) * -1).toString()); // 將當前結果取負
        break;
      case "%":
        setResult((parseFloat(result) / 100).toString()); // 將當前結果轉換為百分比
        break;
      default:
        break;
    }
  };

  return (
    <div className="calculator"> {/* 計算器主容器 */}
      <MyDisplay result={result} /> {/* 顯示屏元件，傳遞當前結果作為屬性 */}
      <MyButton buttonClicked={handleClick} /> {/* 按鈕元件，傳遞事件處理函式作為屬性 */}
    </div>
  );
}

export default MyCalculator;
