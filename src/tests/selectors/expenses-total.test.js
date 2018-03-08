
import selectedExpensesTotal from '../../selectors/expenses-total.js'
import expenses from '../fixtures/expenses'


test('should return 0 if no expense', () => {
  const total = selectedExpensesTotal([])
  expect(total).toEqual(0)

}) 

test('should correctly add single expense', () => {
  const total = selectedExpensesTotal([expenses[0]])
  expect(total).toEqual(195)
})

test('should correctly add multiple expenses', () => {
  const total = selectedExpensesTotal(expenses)
  expect(total).toEqual(expenses[0].amount + expenses[1].amount +expenses[2].amount)
})