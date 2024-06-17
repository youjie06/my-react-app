import React, { useState } from "react";
import MySlider from "./MySlider"; // 引入調色滑塊組件

function MyRGBPanel() {
    // 使用 useState 定義三個狀態變量 r、g、b，初始值為 128
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    // 定義三個更新狀態的函式，每個函式將接收一個新的值並更新對應的狀態
    const updateR = (v) => setR(v);
    const updateG = (v) => setG(v);
    const updateB = (v) => setB(v);

    // 定義用於 CSS 樣式的對象
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
                        backgroundColor: `rgb(${r}, ${g}, ${b})`, // 根據 r、g、b 的值動態設置背景色
                    }}
                />
                <span>R: </span>
                {/* 傳遞 updateR 函式作為 onChange 屬性給 MySlider 組件 */}
                <MySlider onChange={updateR} />
                <span>G: </span>
                {/* 傳遞 updateG 函式作為 onChange 屬性給 MySlider 組件 */}
                <MySlider onChange={updateG} />
                <span>B: </span>
                {/* 傳遞 updateB 函式作為 onChange 屬性給 MySlider 組件 */}
                <MySlider onChange={updateB} />
            </div>
        </>
    );
}

export default MyRGBPanel;
