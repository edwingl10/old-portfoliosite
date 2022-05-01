import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /I am a software engineer currently focusing on bringing web projects to life./i
  );
  expect(linkElement).toBeInTheDocument();
});
