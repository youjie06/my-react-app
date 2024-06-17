import { render, screen } from '@testing-library/react'; // 引入測試庫中的 render 和 screen 方法
import App from './App'; // 引入要測試的 App 元件

test('renders learn react link', () => {
  render(<App />); // 渲染 App 元件到虛擬 DOM 中進行測試
  const linkElement = screen.getByText(/learn react/i); // 從虛擬 DOM 中獲取包含 'learn react' 文字的元素
  expect(linkElement).toBeInTheDocument(); // 斷言該元素應該存在於文檔中（即在虛擬 DOM 中）
});
