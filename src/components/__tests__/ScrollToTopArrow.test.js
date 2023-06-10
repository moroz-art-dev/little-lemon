import React from 'react';
import { render } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import ScrollToTopArrow from '../ScrollToTopArrow';

describe('ScrollToTopArrow component', () => {
  it('should render without errors', () => {
    render(<ScrollToTopArrow />);
  });
});
