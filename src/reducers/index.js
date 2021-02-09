import counterReducer from './counterReducer'
import martReducer from './martReducer'
import {combineReducers} from 'redux'
import resultReducer from './resultReducer'


const rootReducer = combineReducers({
    counter:counterReducer,
    mart:martReducer,
    sum:resultReducer

})

export default rootReducer
