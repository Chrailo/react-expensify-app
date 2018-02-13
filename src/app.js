  
import React, { createElement } from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import { setTimeout } from 'timers';

const store = configureStore()


 store.subscribe(() => {
   const state = store.getState()
   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
   console.log(visibleExpenses)
 })

store.dispatch(addExpense({description: 'Water bill','amount': 4500}))
store.dispatch(addExpense({description: 'Gas bill',  createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', 'amount': 109500,}))


//console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

//console.log(getVisibleExpenses())

ReactDOM.render(jsx, document.getElementById('app'))