import { createContext } from 'react';
import BookingFormContext from '../BookingFormContext';

describe('BookingFormContext', () => {
  it('Should be a React context object', () => {
    expect(BookingFormContext).toBeInstanceOf(createContext().constructor);
  });
});