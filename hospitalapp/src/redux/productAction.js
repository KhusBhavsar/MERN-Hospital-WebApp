import { DOCTORS_LIST, HOSPITAL_LIST, SEARCH_HOSPITAL, ACTIVE_LIST, HIGHEST_RATING} from "./constant"

export const hospitalList = () => {
  
    return {
        type: HOSPITAL_LIST,
    }
}

export const hospitalSearch = (query) => {
  
    return {
        type: SEARCH_HOSPITAL,
        query
    }
}

export const doctorsList = () => {
  
    return {
        type: DOCTORS_LIST,
    }
}
export const activeList = () => {
  
    return {
        type: ACTIVE_LIST,
    }
}
export const highestRating = () => {
  
    return {
        type: HIGHEST_RATING,
    }
}