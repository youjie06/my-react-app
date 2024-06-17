import "./App.css"; // 引入樣式表
import MyRGBPanel from "./components/MyRGBPanel"; // 引入 RGB 調色板元件
import MySlider from "./components/MySlider"; // 引入滑動條元件
import MyCalculator from "./components/MyCalculator"; // 引入計算機元件

function App() {
  return (
    <div className="App">
      <h1>MySlider</h1>
      <MySlider /> {/* 呈現滑動條元件 */}
      <h1>MyRGBPanel</h1>
      <MyRGBPanel /> {/* 呈現 RGB 調色板元件 */}
      <h1>MyCalculator</h1>
      <MyCalculator /> {/* 呈現計算機元件 */}
    </div>
  );
}

export default App; // 匯出 App 元件作為頂層元件
