import React from 'react'; // 引入 React 庫
import ReactDOM from 'react-dom/client'; // 引入 ReactDOM 客戶端的特定方法
import './index.css'; // 引入樣式表
import App from './App'; // 引入要渲染的主應用組件
import reportWebVitals from './reportWebVitals'; // 引入性能報告函數

const root = ReactDOM.createRoot(document.getElementById('root')); // 創建根渲染器，將應用渲染到指定的 DOM 元素上
root.render(
  <React.StrictMode> {/* 使用 React 的嚴格模式 */}
    <App /> {/* 渲染主應用組件 */}
  </React.StrictMode>
);

// 如果你想要開始測量應用程式的性能，可以將一個函數傳遞給 reportWebVitals 來記錄結果
// 例如：reportWebVitals(console.log)
// 或者發送到分析端點。了解更多：https://bit.ly/CRA-vitals
reportWebVitals();
