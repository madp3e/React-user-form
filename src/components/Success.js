import React, { Component} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import RaisedButton from "material-ui/RaisedButton"

class Success extends Component {
    state = {  }
    render() { 
        return ( 
            <MuiThemeProvider>
                <AppBar title="Success"/>
                <h1>Thank you for your registration.</h1>
                <p>We will send you a confirmation email soon</p>
                <br/>
                <RaisedButton label="Back To registration form" 
                    primary={true}
                    onClick={this.props.backToFirstPage}/>
            </MuiThemeProvider>
         );
    }
}
 
export default Success;