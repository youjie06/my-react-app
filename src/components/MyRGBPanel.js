import React, { useState } from "react";
import MySlider from "./MySlider";

// 定義 RGB 色彩面板組件
function MyRGBPanel() {
    // 使用 useState 鉤子來管理 r, g, b 的狀態值，初始值為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 r, g, b 狀態值的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義用於設置整體面板樣式的 CSS 對象
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

    return (
        <>
            <div style={rgbCss}>
                {/* 顯示目前色彩的標題 */}
                <h2 style={{ color: "red" }}>
                    目前色彩
                </h2>
                {/* 顯示目前選擇的色彩 */}
                <div
                    style={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    }}
                />
                {/* 紅色(R)色彩調整器 */}
                <span>R: </span>
                <MySlider onChange={updateR} />
                {/* 綠色(G)色彩調整器 */}
                <span>G: </span>
                <MySlider onChange={updateG} />
                {/* 藍色(B)色彩調整器 */}
                <span>B: </span>
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
