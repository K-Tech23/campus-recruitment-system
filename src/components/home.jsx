import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import AppRightSider from '../container/AppRightSider'
import AppContent from '../container/AppContent'
import AppLeftSider from '../container/AppLeftSider'
import { homeStyle } from './styles'
import customHistory from '../history'
import { fire } from '../firbase'
import Grid from 'material-ui/Grid';
import Middleware from '../store/middleware/middleware'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: ''
        }
    }

    componentWillMount() {
        var loginUserId = this.props.activeUser.uid
        let rooRef = fire.database().ref('users/' + loginUserId)
        rooRef.on('value', (snap) => {
            console.log(snap.val(), "will mount")
            this.props.currentUser(snap.val())
            this.setState({
                userData: snap.val()
            })
        })
    }

    render() {

        const { classes } = this.props
        return (
            <div className={classes.root}>
                {/* <div className="appBody-div"> */}
                <Grid container spacing={24}>
                    <Grid item md={3} >
                        <div className="appRightSider">
                            <AppLeftSider loginUserData={this.state.userData} />
                        </div>
                    </Grid>
                    <Grid md={6}>
                        <div className='appContent'>
                            <AppContent />
                        </div>
                    </Grid>
                    <Grid item md={3}>
                        <div className="appLeftSider">
                            <AppRightSider />
                        </div>
                    </Grid>
                </Grid>
                {/* </div> */}
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
export default connect(stateToProps, disptachToProps)(withStyles(homeStyle)(Home));
