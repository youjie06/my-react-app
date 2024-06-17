const reportWebVitals = onPerfEntry => {
  // 確保onPerfEntry存在且是一個函數
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // 動態導入web-vitals庫
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 分別調用web-vitals庫中的函數，將性能數據傳遞給onPerfEntry函數
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
