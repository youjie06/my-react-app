import { render, screen } from '@testing-library/react'; // 引入 render 和 screen 方法從 @testing-library/react
import App from './App'; // 引入要測試的 App 組件

test('renders learn react link', () => {
  render(<App />); // 渲染 App 組件
  const linkElement = screen.getByText(/learn react/i); // 使用 screen.getByText 方法找到包含文字 "learn react" 的元素
  expect(linkElement).toBeInTheDocument(); // 斷言 linkElement 在文件中是存在的
});
