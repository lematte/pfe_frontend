import authReducers from './auth.reducers'
import registerReducer from './register.reducers'
import formationReducer from './formation.reducers'
import formateurReducer from './formateurs.reducers'
import Centre_formationReducers from './centre_formation.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducers ,
    register: registerReducer ,
    Formation : formationReducer,
    centre_formation :Centre_formationReducers,
    Formateur : formateurReducer
})
export default rootReducer;