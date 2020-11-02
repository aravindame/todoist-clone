import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/Checkbox';

beforeEach(cleanup);

jest.mock('../firebase', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

describe('<Checkbox/>', () => {
  describe('Success', () => {
    it('It should renders the task checkbox', () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this task." />
      );
      expect(queryByTestId('checkbox-action')).toBeTruthy();
    });

    it('It should renders the task checkbox and accepets a click', () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this task." />
      );
      expect(queryByTestId('checkbox-action')).toBeTruthy();
      fireEvent.click(queryByTestId('checkbox-action'));
    });

    it('It should renders the task checkbox and accepets a onKeyDown', () => {
      const { queryByTestId } = render(
        <Checkbox id="1" taskDesc="Finish this task." />
      );
      expect(queryByTestId('checkbox-action')).toBeTruthy();
      fireEvent.keyDown(queryByTestId('checkbox-action'));
    });
  });
});
