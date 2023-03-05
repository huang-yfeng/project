import { userType } from "../models"

export const user_query = (params) => {
    return {
        type: userType.user_query,
        payload: params
    }
}

export const user_add = (params) => {
    return {
        type: userType.user_add,
        payload: params
    }
}

export const user_del = (params) => {
    return {
        type: userType.user_del,
        payload: params
    }
}