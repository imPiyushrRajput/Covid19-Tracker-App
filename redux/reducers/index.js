import { ADD_DEATH, 
  ADD_RECOVERED,
  ADD_CONFIRMED,
  ADD_COUNTRIES, 
  SELECT_COUNTRY, 
  UPDATE_DISPLAY_TEXT, 
  SET_IS_LOADING } from '../types'
import { combineReducers } from 'redux'
import { RootStateOrAny } from 'react-redux'

const initialState = {
  countries: {},
  selectedCountry: 'Entire World',
  selectedCountryCode: '',
  displayText: 'You are currently looking data for ',
  confirmed: 0,
  death: 0,
  recovered: 0,
  loading: true
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEATH:
      return {
        ...state,
        death: action.payload
      }
    case ADD_RECOVERED:
      return {
        ...state,
        recovered: action.payload
      }
    case ADD_CONFIRMED:
      return {
        ...state,
        confirmed: action.payload
      }
    case ADD_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case SELECT_COUNTRY:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_DISPLAY_TEXT:
      return {
        ...state,
        displayText: action.payload
      }
    case SET_IS_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
    app:appReducer,
  }
);
