const reportWebVitals = onPerfEntry => {
  // 確保傳入的 onPerfEntry 是一個函式且存在
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    // 當 web-vitals 庫載入後，取得各種性能指標的函式並執行
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // 通過傳入的 onPerfEntry 函式來記錄各個性能指標的值
      getCLS(onPerfEntry); // Core Web Vitals: Cumulative Layout Shift
      getFID(onPerfEntry); // Core Web Vitals: First Input Delay
      getFCP(onPerfEntry); // First Contentful Paint
      getLCP(onPerfEntry); // Largest Contentful Paint
      getTTFB(onPerfEntry); // Time to First Byte
    });
  }
};

export default reportWebVitals;
