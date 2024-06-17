import React from 'react';

// 定義 MyDisplay 組件，使用 props 來接收父組件傳遞的屬性
function MyDisplay(props) {
    // 返回一個 div 元素，使用 'display' 類來設置樣式，並顯示從 props 接收的 result 屬性
    return <div className='display'>{props.result}</div>
}

// 將 MyDisplay 組件導出，以便在其他組件中使用
export default MyDisplay;
