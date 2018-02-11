import React, { Component } from 'react';

import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { BrowserRouter as Link } from 'react-router-dom';
import { fire } from '../firbase'
import swal from 'sweetalert';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import List from 'material-ui/List';
//import style
import { appHeaderStyle } from './styles'
import Middleware from '../store/middleware/middleware'



class AppHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    show() {
        this.props.history.push('/signup')

    }
    logout() {
        fire.auth().signOut().then(() => {
            swal({
                title: "Logout!",
                text: "Good Bye!",
                icon: "success",
            });
            this.props.history.push('/')
        }
        )
    }
    openDrawer() {
        if (this.state.open === false) {
            this.setState({
                open: true
            })
        } else {
            this.setState({
                open: false
            })
        }
    }
    __currentPage(e) {
        console.log(e.target.id, "cuurent page")
        this.props.currentPage(e.target.id)
        this.openDrawer()
    }
    render() {
        const { classes, currentLogin, currentUser } = this.props;
        console.log(currentLogin, "login user")
        console.log(currentUser.type,"current User")
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.openDrawer.bind(this)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className='title'>
                            Campus Recruitment System
                        </Typography>
                        {
                            currentLogin === null ?
                                <Button color="inherit" onClick={this.show.bind(this)}> Signup</Button>
                                :
                                <Button color="inherit" onClick={this.logout.bind(this)}>Logout</Button>

                        }
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="persistent"
                    className="side-drawer"
                    open={this.state.open}
                >
                    <div className={classes.drawerInner}>
                        <div className='drawerHeader'>
                            <List className="first-list">Campus Recruitment System</List>
                        </div>
                        <Divider />
                        {
                            currentUser.type === 'student' ?
                                <div>
                                    <List className='list' id='createCV' onClick={this.__currentPage.bind(this)}>Create CV</List>
                                    <Divider />
                                    <List className='list' id="signup" onClick={this.__currentPage.bind(this)}>"asdasdasd</List>
                                    <Divider />
                                    <List className='list' id="signup" onClick={this.__currentPage.bind(this)}>"asdasdasd</List>
                                    <Divider />
                                    </div>
                                    :
                                    <div>
                                        <List className='list' id="createJob" onClick={this.__currentPage.bind(this)}>Create Job</List>
                                        <Divider />
                                        <List className='list' id="signup" onClick={this.__currentPage.bind(this)}>"asdasdasd</List>
                                        <Divider />
                                        <List className='list' id="signup" onClick={this.__currentPage.bind(this)}>"asdasdasd</List>
                                        <Divider />
                                    </div>

                                    }
                    </div>
                </Drawer>
            </div>
                    );
                }
            }

function mapStateToProp(state) {
                        console.log(state.loginUser, "login statw")
    return {
                        currentLogin: state.loginUser,
                        currentUser: state.currentUser
            }
        }
function mapDispatchToProp(dispatch) {
    return {
                        currentPage: function (value) {
            return dispatch(Middleware.asyncCurrentPage(value))
                        }
                    }
                }
export default connect(mapStateToProp, mapDispatchToProp)(withStyles(appHeaderStyle)(AppHeader));