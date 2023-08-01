import { SET_HOSPITAL_LIST, ACTIVE_LIST, HIGHEST_RATING } from "./constant"



export const productData = (data = [], action) => {
    switch (action.type) {
            case SET_HOSPITAL_LIST:
                console.warn("HOSPITAL_LIST condition ", action)
                return [...action.data]
            case ACTIVE_LIST:
                const remainingItems1 = data.filter((item) => item.active_doctors > 60);
                return [...remainingItems1];
            case HIGHEST_RATING:
                const remainingItems2 = data.filter((item) => item.overall_ranking > 4.7);
                return [...remainingItems2];
            
        default:
            return data
    }
}




