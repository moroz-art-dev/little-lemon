import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import Main from '../Main';
const testChild = 'Test Child';
describe('Main component', () => {
  it('Should render children', () => {
    render(<Main>{testChild}</Main>);
    expect(screen.getByText(testChild)).toBeInTheDocument();
  });

  it('Should have a class of "main"', () => {
    render(<Main>{testChild}</Main>);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('main');
  });
});
