import { createStore, applyMiddleware, compose } from 'redux'
//import { LoginReducer } from '../../pages//Reducer'
import thunk from 'redux-thunk' //middleware
import { rootReducer } from './rootReducer'

function saveTocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log(e)
  }
}

//To Load from local storage ****important*******
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.log(e)
  }
}
const persistedState = loadFromLocalStorage()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)))
store.subscribe(() => saveTocalStorage(store.getState()))
export default store