import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'

import { welcomeStyle } from './styles'
class Welcome extends Component {
    render() {
        const { classes } = this.props

        return (
            // <Paper className={classes.root} elevation={4}>
            <div>
           
            Welcome {this.props.currentUser.userName} to Campus Recruitment System
           </div>
            // </Paper>
        );
    }
}

function stateToProps(state) {
    console.log(state, "state in app")
    return {
        activeUser: state.loginUser,
        currentUser : state.currentUser
    }
}
function disptachToProps(dispatch) {
    return {

    }
}
export default connect(stateToProps, disptachToProps)(withStyles(welcomeStyle)(Welcome));
