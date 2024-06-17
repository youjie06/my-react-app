import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); // 渲染 App 元件
  const linkElement = screen.getByText(/learn react/i); // 透過正則表達式找到文字是 "learn react" 的元素
  expect(linkElement).toBeInTheDocument(); // 斷言找到的元素應該在文件中 (in the document)
});
