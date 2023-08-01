import {combineReducers} from 'redux'
import { hospitalData } from './reducer'
import {productData} from './productReducer'
import { doctorData } from './doctorReducer'
export default combineReducers({
    hospitalData,
    productData,
    doctorData
})