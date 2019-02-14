import React from 'react';
import { shallow } from 'enzyme';
import { ConfirmationModal } from '../../components/ConfirmationModal';
import expenses from '../fixtures/expenses';

let wrapper, history, startRemoveExpense;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <ConfirmationModal
    history={history}
    startRemoveExpense={startRemoveExpense}
    history={history}
    expense={expenses[2]}
    />
  );
});


test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[2].id
  });
});
