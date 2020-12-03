import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'
import { isOffline } from '../components/CheckInternet/isOfflineReducer'

export const rootReducer = combineReducers({
  form: formReducer,
  nw:isOffline
})
export default rootReducer