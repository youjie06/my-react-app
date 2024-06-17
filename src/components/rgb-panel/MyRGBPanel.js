import React from "react";
import { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    // 使用 useState 定義三個狀態變量來保存 R、G、B 的值，初始值都設置為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 R、G、B 值的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義一個 CSS 樣式物件，用於設置 RGB 面板的樣式
    const rgbCss = {
        border: "1px solid blue",
        borderRadius: "20px",
        width: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      };
      
    // 返回組件的 JSX 結構
    return (
    <>
      <div
        style={rgbCss} // 應用自定義樣式
      >
        <h2 style={{color: "red"}}>
          目前色彩
        </h2>
        <div
          style={{
            width: "250px",
            height: "100px",
            backgroundColor: `rgb(${r}, ${g}, ${b})`, // 根據 R、G、B 的值設置背景色
          }}
        />
        <span>R: </span>
        <MySlider onChange={updateR} /> {/* 使用 MySlider 組件來調整 R 值 */}
        <span>G: </span>
        <MySlider onChange={updateG} /> {/* 使用 MySlider 組件來調整 G 值 */}
        <span>B: </span>
        <MySlider onChange={updateB} /> {/* 使用 MySlider 組件來調整 B 值 */}
      </div>
    </>
  );
}

export default MyRGBPanel;
