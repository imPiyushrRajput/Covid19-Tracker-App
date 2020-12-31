import { 
  ADD_DEATH, 
  ADD_RECOVERED,
  ADD_CONFIRMED,
  ADD_COUNTRIES, 
  SELECT_COUNTRY, 
  UPDATE_DISPLAY_TEXT, 
  SET_IS_LOADING 
} from '../types';

export const addDeath = (death) => async (dispatch) => {
    dispatch({
        type: ADD_DEATH,
        payload: death
    })
}

export const addConfirmed = (confirmed) => async (dispatch) => {
    dispatch({
      type: ADD_CONFIRMED,
      payload: confirmed
    })
}

export const addRecovered = (recovered) => async (dispatch) => {
    dispatch({
      type: ADD_RECOVERED,
      payload: recovered
    })
}

export const addCountries = (countries) => async (dispatch) => {
    dispatch({
      type: ADD_COUNTRIES,
      payload: countries
    })
}

export const changeCountry = (country, code) => async (dispatch) => {
    dispatch({
      type: SELECT_COUNTRY,
      payload: {
        selectedCountry: country,
        selectedCountryCode: code
      }
    })
    dispatch(refreshData(code))
}

export const updateDisplayText = (text) => async (dispatch) => {
    dispatch({
      type: UPDATE_DISPLAY_TEXT,
      payload: text
    })
}

export const refreshData = (code) => async (dispatch) =>  {
    try {
      let resp;
      dispatch(setIsLoading(true))

      if(code === "Entire World") {
        resp = await fetch(`https://covid19.mathdro.id/api/`)
      } else {
        resp = await fetch(`https://covid19.mathdro.id/api/countries/${code}`)
      }

      const { confirmed, deaths, recovered } = await resp.json()

      dispatch(addConfirmed(confirmed.value))
      dispatch(addDeath(deaths.value))
      dispatch(addRecovered(recovered.value))
      dispatch(updateDisplayText('You are currently looking data for '))
      dispatch(setIsLoading(false))
    } catch(e) {
      dispatch(updateDisplayText('Cannot find data for '))
      dispatch(addConfirmed(0))
      dispatch(addDeath(0))
      dispatch(addRecovered(0))
      dispatch(setIsLoading(false))
    }
}

export const setIsLoading = (value) => async (dispatch) => {
    dispatch({
      type: SET_IS_LOADING,
      payload: value
    })
}