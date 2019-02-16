import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ allExpenseCount, hiddenCount, expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const hiddenExpenseWord = hiddenCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
      {
        hiddenCount > 0 ? (
          <div>
            <h3 className="page-header__title">Not Showing <span>{hiddenCount}</span> {hiddenExpenseWord} because of Filters.</h3>
            <h4 className="page-header__title"> Remove Filters to see all expenses.</h4>
          </div>
        ) : allExpenseCount > 0 ? (
          <h3 className="page-header__title">Showing all expenses.</h3>
        ) : (
          <h2 className="page-header__title">Add an expense to get started!</h2>
        )
      }
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const expenseCount = parseInt(visibleExpenses.length);
  const allExpenseCount = state.expenses.length;
  const hiddenCount = parseInt(allExpenseCount) - parseInt(expenseCount);

  return {
    expenseCount: expenseCount,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenCount: hiddenCount,
    allExpenseCount: allExpenseCount
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
