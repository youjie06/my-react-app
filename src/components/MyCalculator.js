import React, { useState } from 'react';
import MyDisplay from './MyDisplay';  // 引入顯示元件
import MyButton from './MyButton';    // 引入按鈕元件
import './MyCalculator.css';         // 引入樣式文件

// 定義計算機元件
function MyCalculator() {
    return (
        <div className='calculator'>  {/* 設置計算機的外部容器 */}
            <MyDisplay />  {/* 顯示元件，顯示計算結果 */}
            <MyButton />    {/* 按鈕元件，提供按鈕點擊功能 */}
        </div>
    );
}

export default MyCalculator;
