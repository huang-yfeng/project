import { userType } from "../models"

const params = {
    name: "测试"
}

const userReducer = (state = params, action) => {
    switch (action.type) {
        case userType.user_query:
            return { ...state, ...action.payload }
        case userType.user_add:
            return { ...state, ...action.payload }
        case userType.user_del:
            return { ...state, ...action.payload }

        default:
            break
    }
    return state
}

export default userReducer