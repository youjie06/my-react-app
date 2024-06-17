import { useState } from "react";

function MySlider({onChange}) {
  // 定義一個狀態變量來保存滑塊的當前值，初始值為 128
  const [value, setValue] = useState(128);

  // 當滑塊值發生變化時的處理函數
  const handleChange = (e) => {
    setValue(e.target.value); // 更新狀態變量
    if (onChange){ // 如果有傳入 onChange 回調函數，則調用它
      onChange(e.target.value);
    }
  };

  return (
    <div>
      {/* 滑塊輸入元素 */}
      <input
        type="range"
        width="200"
        min="0"
        max="255"
        value={value} // 綁定滑塊的值
        onChange={handleChange} // 當滑塊值改變時調用 handleChange 函數
      />
      <span>{value}</span> {/* 顯示當前滑塊的值 */}
    </div>
  );
}

export default MySlider;
