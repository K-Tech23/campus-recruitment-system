import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { appLeftSiderStyle } from './styles'
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Person from 'material-ui-icons/Person'
import Email from 'material-ui-icons/Email'
import { connect } from 'react-redux'

class AppLeftSider extends Component {
    render() {
        const { classes, currentUser } = this.props
        const avatar = require('../assets/avatar-placeholder.png')
        console.log(this.props.currentUser, "props")
        return (
            // <div>
            <Paper className={classes.root} elevation={4}>
                <img src={avatar} alt="profile" className="profile_image" />

                <List component="nav" className="detail-list">
                    <ListItem button>
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText inset primary={currentUser.userName} className="list-text" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText inset primary={currentUser.email} />
                    </ListItem>
                </List>
            </Paper>
            // </div>
        );
    }
}
function stateToProps(state) {
    console.log(state, "state in app")
    return {
        currentUser: state.currentUser
    }
}
function disptachToProps(dispatch) {
    return {

    }
}
export default connect(stateToProps, disptachToProps)(withStyles(appLeftSiderStyle)(AppLeftSider))
