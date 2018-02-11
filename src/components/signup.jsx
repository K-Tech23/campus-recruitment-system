import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
// import { BrowserRouter as Link } from 'react-router-dom';
import { signupStyle } from './styles'
import { fire } from '../firbase'
import swal from 'sweetalert';
import { CircularProgress } from 'material-ui/Progress';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form'
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            matchPassowrd: false,
            loading: false,
            hasError: false,
            errorMessage: '',
            value:''
        }
        this.usernameHandler = this.usernameHandler.bind(this)
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.confirmPasswordHandler = this.confirmPasswordHandler.bind(this)
        this.signup = this.signup.bind(this)
    }
    usernameHandler(e) {
        // console.log(e, "email")
        this.setState({
            userName: e.target.value
        })

    }
    emailHandler(e) {
        // console.log(e, "email")
        this.setState({
            email: e.target.value
        })

    }
    passwordHandler(e) {
        console.log(e.target.value, "password")
        this.setState({
            password: e.target.value
        })
    }
    confirmPasswordHandler(e) {
        // console.log(e.target.val ue, "password")
        this.setState({
            confirmPassword: e.target.value
        }, () => {
            if (this.state.password === this.state.confirmPassword) {
                this.setState({ matchPassowrd: false })
            } else {
                this.setState({ matchPassowrd: true })
            }
        })
    }
    signup() {
        if (this.state.userName === '' || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
            swal({
                title: "Oops!",
                text: "Filled the Form Completly!",
                icon: "error",
            });
        } else {
            this.setState({ hasError: false, loading: true })
            let userName = this.state.userName
            let email = this.state.email
            let password = this.state.password
            fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                console.log(user)
                let key = fire.auth().currentUser.uid;
                fire.database().ref('users/' + key).set({
                    userName: this.state.userName,
                    email: this.state.email,
                    userId: key,
                    type : this.state.value
                })
                this.setState({
                    loading: false,
                    email: '',
                    password: ''
                }, () => {
                    this.props.history.push('/')
                })
            }

            ).catch(err => {
                console.log(err, 'error')
                this.setState({
                    errorMessage: err.message,
                    hasError: true,
                    loading: false
                })
            })
            // signupUser(user);

        }
    }
   
    handleChange = (event, value) => {
        console.log(value,"radio")
        this.setState({ value });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className='paper-container' elevation={4}>
                    {
                        this.state.loading ?
                            <div className="loader">
                                <CircularProgress size={80} />
                            </div>
                            : null}
                    <h1 className="signup-title">Signup</h1>
                    {this.state.hasError ?
                        <span style={{ color: 'red', fontSize: '14px' }}>{this.state.errorMessage}</span>
                        : null
                    }
                    <TextField
                        error={false}
                        label="Username"
                        placeholder="Enter Your Name"
                        className="textField"
                        onChange={(e) => this.usernameHandler(e)}

                    />
                    <TextField
                        error={false}
                        label="Email"
                        placeholder="Enter Your Email"
                        className="textField"
                        onChange={(e) => this.emailHandler(e)}

                    />

                    <TextField
                        error={false}
                        label="Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.passwordHandler(e)}

                    />
                    <TextField
                        error={this.state.matchPassowrd}
                        label="Confirm Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.confirmPasswordHandler(e)}

                    />
                    <FormControl component="fieldset" required className='radio-control'>
                        <RadioGroup
                            aria-label="gender"
                            name="user"
                            className={classes.group}
                            value={this.state.value}
                            onChange={this.handleChange}
                        >
                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                            <FormControlLabel value="company" control={<Radio />} label="Company" />
                        </RadioGroup>
                    </FormControl>
                    <Button variant="raised" color="primary"
                        onClick={() => this.signup()}
                    >
                        Signup
                    </Button>
                    <span className='alreadyLogin-span' onClick={() => this.props.history.push('/')}>
                        Already Have Account...?
                        </span>

                </Paper>}
            </div>
        );
    }
}
export default withStyles(signupStyle)(Signup);
