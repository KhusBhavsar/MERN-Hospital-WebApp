import { BOOK_APPOINTMENT,CANCEL_APPOINTMENT} from "./constant"

export const bookAppointment= (data) => {
    console.warn("action is called", data)
    return {
        type: BOOK_APPOINTMENT,
        data
    }
}

export const cancelAppointment = (data) => {
    console.warn("action removeToCart", data)
    return {
        type: CANCEL_APPOINTMENT,
        data
    }
}

