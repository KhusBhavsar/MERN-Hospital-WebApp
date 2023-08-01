import {BOOK_APPOINTMENT, CANCEL_APPOINTMENT} from "./constant"



export const hospitalData = (data = [], action) => {
    switch (action.type) {
        case BOOK_APPOINTMENT:
            console.warn("BOOK_APPOINTMENT condition ", action)
            return [action.data]
        case CANCEL_APPOINTMENT:
            console.warn("CANCEL_APPOINTMENT condition ", action);
            // data.length= data.length? data.length-1:[]
            const remainingItems = data.filter((item) => item.id !== action.data)
            return [...remainingItems]
        default:
            return data
    }
}