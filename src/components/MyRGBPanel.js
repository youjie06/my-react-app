import React, { useState } from "react";
import MySlider from "./MySlider";

function MyRGBPanel() {
    // 使用 useState 鉤子來管理 R、G、B 的狀態
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義更新 R、G、B 狀態的函數
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義 CSS 样式對象，用於設置顯示面板的外觀
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
                <h2 style={{ color: "red" }}>
                    目前色彩
                </h2>
                <div
                    style={{
                        width: "250px",
                        height: "100px",
                        backgroundColor: `rgb(${r}, ${g}, ${b})`,
                    }}
                />
                <span>R: </span>
                {/* 呼叫 MySlider 組件並傳遞 updateR 函數作為 onChange 屬性 */}
                <MySlider onChange={updateR} />
                <span>G: </span>
                {/* 呼叫 MySlider 組件並傳遞 updateG 函數作為 onChange 屬性 */}
                <MySlider onChange={updateG} />
                <span>B: </span>
                {/* 呼叫 MySlider 組件並傳遞 updateB 函數作為 onChange 屬性 */}
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
