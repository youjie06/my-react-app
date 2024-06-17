import "./App.css";
import MyRGBPanel from "./components/rgb-panel/MyRGBPanel"; // 匯入 RGB 面板組件
import MySlider from "./components/rgb-panel/MySlider"; // 匯入滑塊組件
import MyCalculator from "./components/calculator/MyCalculator"; // 匯入計算器組件
import TicTacToe from "./components/tic-tac-toe/TicTacToe"; // 匯入井字遊戲組件

function App() {
  return (
    <div className="App">
      <h1>MySlider</h1> {/* 滑塊組件 */}
      <MySlider /> {/* 呈現滑塊組件 */}
      
      <h1>MyRGBPanel</h1> {/* RGB 面板組件 */}
      <MyRGBPanel /> {/* 呈現 RGB 面板組件 */}
      
      <h1>MyCalculator</h1> {/* 計算器組件 */}
      <MyCalculator /> {/* 呈現計算器組件 */}
      
      <h1>Tic-Tac-Toe Game</h1> {/* 井字遊戲 */}
      <TicTacToe /> {/* 呈現井字遊戲組件 */}
    </div>
  );
}

export default App;
