import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import { jobListStyle } from './styles'
import { fire } from '../firbase'
import Middleware from '../store/middleware/middleware'

class JobList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jobs: ''
        }
    }

    componentWillMount() {
        var loginUserId = localStorage.getItem("loginUser")
        let rooRef = fire.database().ref('jobs/')
        rooRef.on('value', (snap) => {
            console.log(snap.val(), "will mount")
            this.props.currentUser(snap.val())
            this.setState({
                jobs: snap.val()
            })
        })
    }

    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
Joblist
            </div>
        )
    }


}
function stateToProps(state) {
    console.log(state, "state in app")
    return {
        activeUser: state.loginUser
    }
}
function disptachToProps(dispatch) {
    return {
        currentUser: function (value) {
            return dispatch(Middleware.asyncCurrentUser(value))
        }
    }
}
export default connect(stateToProps, disptachToProps)(withStyles(jobListStyle)(JobList));
