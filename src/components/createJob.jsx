import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import { createJobStyle } from './styles'
import Button from 'material-ui/Button';
import Middleware from '../store/middleware/middleware'
import { fire } from '../firbase'

class CreateJob extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            experience: '',
            position: '',
            qualification: '',
            skills: '',
            salary: ''
        }
    }

    __createJob() {
        let job = {
            title: this.state.title,
            experience: this.state.experience,
            position: this.state.position,
            qualification: this.state.qualification,
            skills: this.state.skills,
            salary: this.state.salary
        }
        let id = fire.auth().currentUser.uid
        this.props.createJob(job)
        this.setState({
            title: '',
            experience: '',
            position: '',
            qualification: '',
            skills: '',
            salary: '',
            userId:id
        })
        console.log(job, "job")
    }
    render() {
        const { classes } = this.props

        return (
            <Paper className={classes.root} elevation={4}>
                <h1 className="title"> Create Job</h1>
                <TextField
                    id="title"
                    value={this.state.title}
                    label="Title"
                    className='textfield'
                    variant="createJob"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ title: e.target.value }) }}
                />
                <TextField
                    id="experience"
                    value={this.state.experience}

                    label="Experience"
                    className='textfield'
                    variant="experience"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ experience: e.target.value }) }}
                />
                <TextField
                    id="position"
                    value={this.state.postion}
                    label="Positions"
                    className='textfield'
                    variant="position"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ postion: e.target.value }) }}

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
                    id="salary"
                    value={this.state.salary}
                    label="Salary"
                    className='textfield'
                    variant="salary"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={(e) => { this.setState({ salary: e.target.value }) }}

                />
                <Button variant="raised" color="primary" className="create-button" onClick={this.__createJob.bind(this)}>Create Job</Button>
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
        createJob: function (value) {
            return dispatch(Middleware.asyncCreateJob(value))
        }
    }
}
export default connect(stateToProps, disptachToProps)(withStyles(createJobStyle)(CreateJob));
