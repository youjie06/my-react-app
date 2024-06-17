import { useState } from "react";

function MySlider() {
  const [value, setValue] = useState(128); // 使用useState來管理滑動條的值，初始值為128

  // handleChange函數處理滑動條值的變化事件
  const handleChange = (e) => {
    setValue(e.target.value); // 更新滑動條的值為事件目標的值
  };

  return (
    <div>
      <input
        type="range"
        width="200" // 滑動條的寬度屬性，此處設置無效，應使用CSS來控制寬度
        min="0" // 滑動條的最小值
        max="255" // 滑動條的最大值
        value={value} // 當前滑動條的值，受useState管理
        onChange={handleChange} // 滑動條值變化時的事件處理函數
      />
      <span>{value}</span> {/* 顯示當前滑動條的值 */}
    </div>
  );
}

export default MySlider;
