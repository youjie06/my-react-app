import React, { useState } from "react";

function MySlider({ onChange }) {
    // 使用 useState 定義一個狀態變量 value，初始值為 128
    const [value, setValue] = useState(128);

    // handleChange 是滑塊的 onChange 事件處理函式
    const handleChange = (e) => {
        setValue(e.target.value); // 更新狀態 value 為滑塊的當前值
        if (onChange) {
            onChange(e.target.value); // 如果有傳入 onChange 屬性，則調用它並傳遞當前值
        }
    };

    return (
        <div>
            <input
                type="range"     // 滑塊類型
                min="0"          // 最小值
                max="255"        // 最大值
                value={value}    // 當前值
                onChange={handleChange} // onChange 事件處理函式
            />
            <span>{value}</span> // 顯示當前值
        </div>
    );
}

export default MySlider;
