import React, { useState } from "react";

function MySlider({ onChange }) {
  // 使用 useState 鉤子來管理滑動條的值，並初始化為 128
  const [value, setValue] = useState(128);

  // 定義滑動條值變更的事件處理函數
  const handleChange = (e) => {
    // 更新滑動條的值
    setValue(e.target.value);
    // 如果傳入了 onChange 屬性，則調用它並傳遞當前值
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      {/* 使用 input 元素來實現滑動條，設置類型為 range，範圍為 0 到 255 */}
      <input
        type="range"
        width="200"
        min="0"
        max="255"
        value={value}  // 將當前值綁定到 input 的值
        onChange={handleChange}  // 當值變更時調用 handleChange 函數
      />
      {/* 顯示當前滑動條的值 */}
      <span>{value}</span>
    </div>
  );
}

export default MySlider;
