import "./App.css"; // 引入 App.css 樣式表
import MyRGBPanel from "./components/MyRGBPanel"; // 引入 MyRGBPanel 元件
import MySlider from "./components/MySlider"; // 引入 MySlider 元件

function App() {
  return (
    <div className="App"> {/* 使用 App.css 中的 App 樣式 */}
      <h1>MySlider</h1> {/* 標題顯示 "MySlider" */}
      <MySlider /> {/* 渲染 MySlider 元件 */}
      <h1>MyRGBPanel</h1> {/* 標題顯示 "MyRGBPanel" */}
      <MyRGBPanel /> {/* 渲染 MyRGBPanel 元件 */}
    </div>
  );
}

export default App; // 導出 App 元件
