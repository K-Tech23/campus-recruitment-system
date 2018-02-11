import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import { createCVStyle } from './styles'
import Button from 'material-ui/Button';
import Middleware from '../store/middleware/middleware'

class CreateCV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            contact: '',
            qualification: '',
            skills: '',
            address: ''
        }
    }

    __createCV() {
        let cv = {
            name: this.state.name,
            email: this.state.email,
            contact: this.state.contact,
            qualification: this.state.qualification,
            skills: this.state.skill,
            address: this.state.address
        }
        this.props.createCV(cv)
        this.setState({
            name:'',
            email:'',
            contact:'',
            qualification:'',
            skills:'',
            address:''
        })
        console.log(cv, "cv")
    }
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
                <h1 className="title"> Create CV</h1>
                <TextField
                    id="name"
                    value={this.state.name}
                    label="Name"
                    className='textfield'
                    variant="name"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                />
                <TextField
                    id="email"
                    value={this.state.email}

                    label="Email"
                    className='textfield'
                    variant="email"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                />
                <TextField
                    id="contact"
                    value={this.state.contact}
                    label="Contact"
                    className='textfield'
                    variant="contact"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ contact: e.target.value }) }}

                />
                <TextField
                    id="qualification"
                    value={this.state.qualification}
                    label="Qualification"
                    className='textfield'
                    variant="qualification"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ qualification: e.target.value }) }}

                />
                <TextField
                    id="skills"
                    value={this.state.skills}
                    label="Skills"
                    className='textfield'
                    variant="skills"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ skills: e.target.value }) }}

                />
                <TextField
                    id="address"
                    value={this.state.address}
                    label="Address"
                    className='textfield'
                    variant="address"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ address: e.target.value }) }}

                />
                <Button variant="raised" color="primary" className="create-button" onClick={this.__createCV.bind(this)}>Create</Button>
            </Paper>
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
        createCV: function (value) {
            return dispatch(Middleware.asyncCreateCV(value))
        }
    }
}
export default connect(stateToProps, disptachToProps)(withStyles(createCVStyle)(CreateCV));
