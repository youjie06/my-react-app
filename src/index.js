// 引入 React 和 ReactDOM 相關模組
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // 引入 CSS 樣式
import App from './App'; // 引入主應用元件
import reportWebVitals from './reportWebVitals'; // 引入網頁性能報告模組

// 使用 ReactDOM.createRoot 創建根節點
const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染主應用元件 App 到根節點，並包裹在 React.StrictMode 中
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果你想要開始測量應用的性能，將一個函式傳遞給 reportWebVitals 來記錄結果
// 例如：reportWebVitals(console.log)
// 或者傳送到分析端點。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
