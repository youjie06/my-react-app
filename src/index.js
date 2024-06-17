import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 創建一個 ReactDOM 的根實例並將應用程式渲染到指定的 root 元素上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果你想要開始測量應用程式的性能，可以傳遞一個函式來記錄結果
// 例如: reportWebVitals(console.log)
// 或者將數據發送到分析端點
// 了解更多: https://bit.ly/CRA-vitals
reportWebVitals();
