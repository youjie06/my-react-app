import React, { useState } from "react";

// 定義 MySlider 函數組件，用於顯示和控制滑塊
function MySlider({ onChange }) {
  // 使用 useState 鉤子來管理 value 狀態，初始值設置為 128
  const [value, setValue] = useState(128);

  // 定義 handleChange 函數，處理滑塊值變化事件
  const handleChange = (e) => {
    // 更新 value 狀態為滑塊當前值
    setValue(e.target.value);
    // 如果有傳入 onChange 函數，則調用 onChange 函數並傳遞當前值
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      {/* input 標籤用於顯示和控制滑塊 */}
      <input
        type="range"  // 滑塊類型
        width="200"   // 寬度屬性（不正確的屬性，應該使用 style 屬性來設置寬度）
        min="0"       // 最小值
        max="255"     // 最大值
        value={value} // 當前值，由 value 狀態控制
        onChange={handleChange} // 當滑塊值變化時調用 handleChange 函數
      />
      {/* 顯示當前滑塊值的數字 */}
      <span>{value}</span>
    </div>
  );
}

export default MySlider;
