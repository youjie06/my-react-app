const reportWebVitals = onPerfEntry => {
  // 確認 onPerfEntry 是否存在且是函式類型
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // 動態引入 'web-vitals' 模組，然後執行後續操作
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 呼叫各性能指標函式，並將 onPerfEntry 作為參數傳遞進去
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
