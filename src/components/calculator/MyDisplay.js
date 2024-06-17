import React from 'react';

// MyDisplay 元件負責顯示計算器的結果
function MyDisplay(props) {
    return <div className='display'>{props.result}</div> // 將傳遞過來的 result 屬性顯示在 div 中
}

export default MyDisplay;
