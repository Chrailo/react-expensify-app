import moment from 'moment'
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters'

test('should generate set start date action object', () => {
  const action =setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set sort by amount object', () => {
  const action = sortByAmount()  
  expect(action).toEqual({
    type:'SET_SORT_BY_AMOUNT',
  })
})

test('should generate set sort by date object', () => {
  const action = sortByDate()  
  expect(action).toEqual({
    type:'SET_SORT_BY_DATE',
  })
})

test('should generate set text filter object', () => {
  const action = setTextFilter('date')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:'date',
  })
})

test('should generate set default text filter object', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:'',
  })
})