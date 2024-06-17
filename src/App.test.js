import { render, screen } from '@testing-library/react'; // 引入測試相關的 React 库
import App from './App'; // 引入待測試的應用程式組件

test('renders learn react link', () => {
  render(<App />); // 渲染 App 组件
  const linkElement = screen.getByText(/learn react/i); // 在渲染後，尋找包含 "learn react" 文字的元素
  expect(linkElement).toBeInTheDocument(); // 斷言該元素應該存在於文檔中
});
