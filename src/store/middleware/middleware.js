import Action from '../actions/actions'
import { fire } from '../../firbase'

export default class Middleware {


    static asyncIsUserLogin(data) {
        console.log(data, "middleware")
        return (dispatch) => {
            dispatch(Action.isUserLogin(data))
        }
    }
    static asyncCreateCV(data) {
        console.log(data, "middleware")
        let id = fire.auth().currentUser.uid;
        console.log(id, "userId")

        fire.database().ref('cv/' + id).set(data).then(() => {
                return (dispatch) => {
                    dispatch(Action.creatCV(data))
                }
            })
    }
    static asyncCreateJob(data) {
        console.log(data, "middleware")
        let id = fire.auth().currentUser.uid;
        console.log(id, "userId")

        fire.database().ref('jobs').push(data)
        // .then(() => {
                // return (dispatch) => {
                    // dispatch(Action.creatJob(data))
                // }
            // })
    }
    static asyncCurrentPage(page) {
        console.log(page, "middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentPage(page))
        }
    }
    static asyncCurrentUser(data) {
        console.log(data, "middleware")
        return (dispatch) => {
            dispatch(Action.setCurrentUser(data))
        }
    }
    static asyncLogout(data) {
        console.log(data, "middleware")
        return (dispatch) => {
            dispatch(Action.logout(data))
        }
    }




}