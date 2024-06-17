import "./App.css"; // 引入樣式表
import MyRGBPanel from "./components/MyRGBPanel"; // 引入自訂組件 MyRGBPanel
import MySlider from "./components/MySlider"; // 引入自訂組件 MySlider
import MyCalculator from "./components/MyCalculator"; // 引入自訂組件 MyCalculator

function App() {
  return (
    <div className="App"> {/* 使用 App 類名作為根元素的類名 */}
      <h1>MySlider</h1> {/* 標題 MySlider */}
      <MySlider /> {/* 渲染 MySlider 組件 */}
      <h1>MyRGBPanel</h1> {/* 標題 MyRGBPanel */}
      <MyRGBPanel /> {/* 渲染 MyRGBPanel 組件 */}
      <h1>MyCalculator</h1> {/* 標題 MyCalculator */}
      <MyCalculator /> {/* 渲染 MyCalculator 組件 */}
    </div>
  );
}

export default App; // 匯出 App 組件
