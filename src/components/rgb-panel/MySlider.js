import { useState } from "react";

// MySlider 元件負責渲染一個滑動條並處理其變化
function MySlider({ onChange }) {
  const [value, setValue] = useState(128); // 定義並初始化滑動條的 value 狀態變數，初始值為 128

  // handleChange 函數處理滑動條值變化事件
  const handleChange = (e) => {
    setValue(e.target.value); // 更新滑動條的 value 狀態
    if (onChange) {
      onChange(e.target.value); // 如果有 onChange 回調函數，則調用它並傳遞當前滑動條的值
    }
  };

  return (
    <div>
      <input
        type="range" // 設定 input 元素為滑動條
        width="200" // 設定滑動條寬度
        min="0" // 設定滑動條的最小值
        max="255" // 設定滑動條的最大值
        value={value} // 設定滑動條的當前值
        onChange={handleChange} // 設定滑動條的 onChange 事件處理函數
      />
      <span>{value}</span> {/* 顯示滑動條的當前值 */}
    </div>
  );
}

export default MySlider;
