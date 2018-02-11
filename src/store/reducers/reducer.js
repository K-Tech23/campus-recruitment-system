
import Constant from '../constant/constant'

var INITIAL_STATE =
    {
        loginUser: null,
        loading: false,
        currentPage: 'welcome',
        currentUser: {},
        hasCV: {}
    }
function reducerFunction(state = INITIAL_STATE, action) {
    console.log(action, "reducer calling")
    switch (action.type) {

        case Constant.USER_LOGIN: //login user
            console.log("user login")
            return { ...state, loginUser: action.payload }

        case Constant.REGISTER: //register
            return state

        case Constant.LOGIN: //login
            return state
        case Constant.CREATE_CV:
            return { ...state, hasCV: action.payload }

        case Constant.CURRENT_PAGE:
            return { ...state, currentPage: action.payload }

        case Constant.CURRENT_USER:
            return { ...state, currentUser: action.payload }

        case Constant.USER_LOGOUT:
            return { ...state, currentPage: '', loginUser: null, curentUser: {} ,hasCV:{}}

        default:
            return state


    }




}
export default reducerFunction;