import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

describe('Main component', () => {
  it('Should render children', () => {
    const testChild = 'Test Child';
    render(<Main>{testChild}</Main>);
    expect(screen.getByText(testChild)).toBeInTheDocument();
  });

  it('Should have a class of "main"', () => {
    render(<Main />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('main');
  });
});
