import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { loginStyle } from './styles'
import Button from 'material-ui/Button';
import { BrowserRouter as Link } from 'react-router-dom';
import { CircularProgress } from 'material-ui/Progress';
import { fire } from '../firbase'
import swal from 'sweetalert';
import { connect } from 'react-redux'
import customHistory from '../history'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: "",
            loading: false,
            hasError: false,
            errorMessage: ''

        }
        this.emailHandler = this.emailHandler.bind(this)
        this.passwordHandler = this.passwordHandler.bind(this)
        this.login = this.login.bind(this)
    }
    emailHandler(e) {
        // console.log(e, "email")
        this.setState({
            email: e.target.value
        })

    }
    passwordHandler(e) {
        // console.log(e.target.value, "password")
        this.setState({
            password: e.target.value
        })
    }

    login() {
        if (this.state.Username === '' || this.state.email === '' || this.state.password === '' || this.state.confirmPassword === '') {
            swal({
                title: "Oops!",
                text: "Filled the Form Completly!",
                icon: "error",
            });
        } else {
            this.setState({ loading: true })
            let email = this.state.email
            let password = this.state.password

            fire.
                auth().signInWithEmailAndPassword(email, password).then(() => {
                    console.log("login user")
                    var id = fire.auth().currentUser.uid
                    localStorage.setItem("loginUser",id)
                    this.setState({
                        loading: false,
                        email: '',
                        password: ''
                    }, () => {
                        this.props.history.push('/home')
                        // customHistory.push('/home')
                    })
                }).catch(err => {
                    console.log(err)
                    this.setState({
                        errorMessage: err.message,
                        hasError: true,
                        loading: false
                    })
                }
                )




        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <Paper className="paper-container" elevation={4}>
                    {
                        this.state.loading ?
                            <div className="loader">
                                <CircularProgress size={80} />
                            </div>
                            : null}
                    <h1 className='login-title'>Login</h1>
                    {this.state.hasError ?
                        <span style={{ color: 'red', fontSize: '14px' }}>{this.state.errorMessage}</span>
                        : null
                    }
                    <TextField
                        value={this.state.email}
                        error={false}
                        label="Email"
                        placeholder="Enter Your Email"
                        className="textField"
                        onChange={(e) => this.emailHandler(e)}
                    />

                    <TextField
                        value={this.state.password}
                        error={false}
                        label="Password"
                        className="textField"
                        placeholder="Enter Your Password"
                        type='password'
                        onChange={(e) => this.passwordHandler(e)}
                    />
                    <Button raised color="primary"
                        onClick={() => this.login()}
                    >
                        lOGIN
                    </Button>
                    {/* <Link to="/signup">Already have Account??</Link>  */}
                    <span className='createAccount-span' onClick={() => this.props.history.push('/signup')}>
                        Create an Account...
                    </span>
                </Paper>
                }
            </div>
        );
    }
}

function mapStateToProp(state) {
    console.log(state, "login statw")
    return {
        loginUser: state
    }
}
function mapDispatchToProp(dispatch) {
    return {

    }
}
export default connect(mapStateToProp, mapDispatchToProp)(withStyles(loginStyle)(Login));
