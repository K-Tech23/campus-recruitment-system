import React, { Component } from 'react';

import { fire } from '../firbase'
import { withStyles } from 'material-ui/styles';
import AppHeader from '../container/AppHeader'
import AppRightSider from '../container/AppRightSider'
import AppContent from '../container/AppContent'
import AppLeftSider from '../container/AppLeftSider'
import { appStyle } from './styles'
import { connect } from 'react-redux'
import swal from 'sweetalert';
import customHistory from '../history'
import Routes from '../routes/routes'

import Middleware from '../store/middleware/middleware'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user, "login user")
        this.props.loginUser(user)
      } else {
        console.log(user, "no user login")
        this.props.loginUser(null)
        this.props.history.push('/')
      
      }

    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Routes />
      </div>
    );
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
    loginUser: function (value) {
      return dispatch(Middleware.asyncIsUserLogin(value))
    }
  }
}
export default connect(stateToProps, disptachToProps)(withStyles(appStyle)(App));
