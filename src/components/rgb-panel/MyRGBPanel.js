import React from "react";
import { useState } from "react";
import MySlider from "./MySlider"; // 從 MySlider 檔案中導入 MySlider 元件

// MyRGBPanel 元件負責顯示和調整 RGB 色彩值
function MyRGBPanel() {
    const [r, setR] = useState(128); // 定義並初始化 r 狀態變數，預設值為 128
    const [g, setG] = useState(128); // 定義並初始化 g 狀態變數，預設值為 128
    const [b, setB] = useState(128); // 定義並初始化 b 狀態變數，預設值為 128

    // 更新 r 值的函數
    const updateR = (v) => setR(v);
    // 更新 g 值的函數
    const updateG = (v) => setG(v);
    // 更新 b 值的函數
    const updateB = (v) => setB(v);

    // 定義 RGB 面板的 CSS 樣式
    const rgbCss = {
        border: "1px solid blue", // 設定藍色邊框
        borderRadius: "20px", // 設定邊角圓滑程度
        width: "300px", // 設定面板寬度
        display: "flex", // 使用 flexbox 佈局
        flexDirection: "column", // 垂直方向排列
        padding: "20px", // 設定內邊距
        justifyContent: "center", // 垂直方向居中
        alignItems: "center", // 水平方向居中
        margin: "auto", // 自動水平居中
    };

    return (
        <>
            <div style={rgbCss}> {/* 設定 RGB 面板的樣式 */}
                <h2 style={{color: "red"}}>
                    目前色彩 {/* 標題文字顯示為紅色 */}
                </h2>
                <div
                    style={{
                        width: "250px", // 設定色彩顯示區域的寬度
                        height: "100px", // 設定色彩顯示區域的高度
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 根據 r, g, b 值設置背景顏色
                    }}
                />
                <span>R: </span>
                <MySlider onChange={updateR} /> {/* 調整 R 值的滑動條 */}
                <span>G: </span>
                <MySlider onChange={updateG} /> {/* 調整 G 值的滑動條 */}
                <span>B: </span>
                <MySlider onChange={updateB} /> {/* 調整 B 值的滑動條 */}
            </div>
        </>
    );
}

export default MyRGBPanel;
