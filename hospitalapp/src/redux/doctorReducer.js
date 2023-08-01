import { SEARCH_DOCTOR_LIST } from "./constant"




export const doctorData = (data = [], action) => {
    switch (action.type) {
        case SEARCH_DOCTOR_LIST:
            console.warn("Doctor List Condition", action)
            return[...action.data]
            
        default:
            return data
    }
}