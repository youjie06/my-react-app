import React from 'react';
import ReactDOM from 'react-dom'; // 使用 ReactDOM 的正確引入方式
import './index.css'; // 引入自定義的 CSS 樣式表
import App from './App'; // 引入主要的應用程式組件
import reportWebVitals from './reportWebVitals'; // 引入用於測量 Web 效能的函式

// 創建根節點，並將應用程式渲染到根節點中
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
