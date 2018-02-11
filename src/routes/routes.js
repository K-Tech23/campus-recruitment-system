import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import purple from 'material-ui/colors/purple';

//import components
import Login from '../components/login'
import Signup from '../components/signup'
import Home from '../components/home'
import AppHeader from '../container/AppHeader'
import customHistory from '../history'
const theme = createMuiTheme({
  palette: {
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class Routes extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <div>
              <Route  path='/' component={AppHeader} />
              <Route exact path="/" component={Login} />
              <Route  path="/signup" component={Signup} />
              <Route  path="/home" component={Home} />
            </div>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default Routes;
