import { render, screen } from '@testing-library/react';
import SubDetails from '../components/SubDetails';

it('title', () => {
  render(<SubDetails title="Title Test">Content Test</SubDetails>);
  const title = document.querySelector('.title');
  expect(title.textContent).toBe('Title Test');
});

it('content', () => {
  render(<SubDetails title="Title Test">Content Test</SubDetails>);
  const content = screen.getByText('Content Test');
  expect(content).toBeInTheDocument('Title Test');
});
