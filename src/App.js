import logo from "./logo.svg"; // 導入logo圖片，這裡假設是在src目錄下
import "./App.css"; // 導入App組件的樣式表
import MySlider from "./MySlider"; // 導入自定義的MySlider組件

function App() {
  return (
    <div className="App">
      <h1>Javascript程式設計，使用react</h1> {/* 應用的標題 */}
      <h2>第一個元件</h2> {/* 子標題 */}
      <span>R: </span><MySlider /> {/* 顯示R色調的MySlider組件 */}
      <span>G: </span><MySlider /> {/* 顯示G色調的MySlider組件 */}
      <span>B: </span><MySlider /> {/* 顯示B色調的MySlider組件 */}
      
      {/* 
      下面是被註解掉的原始程式碼
      */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello React! 2024.5.1</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
