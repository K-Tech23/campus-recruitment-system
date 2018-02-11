import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Routes from '../routes/routes'
import { appContentStyle } from './styles'
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import CreateCV from '../components/createCV'
import Welcome from '../components/welcome'
import CreateJob from '../components/createJob'
class AppContent extends Component {
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
                {{
                    createCV: <CreateCV />,
                    createJob: <CreateJob />,
                    welcome:<Welcome/>
                    // jobs: <Jobs />
                    // studentCV: <StudentCV />
                    // alljob: <AllJobs />
                    // allCV: <AllCV />
                }[this.props.currentPage]}
            </Paper>
        );
    }
}
function stateToProps(state) {
    console.log(state, "state in app")
    return {
        activeUser: state.loginUser,
        currentPage: state.currentPage
    }
}
function disptachToProps(dispatch) {
    return {

    }
}
export default connect(stateToProps, disptachToProps)(withStyles(appContentStyle)(AppContent));


