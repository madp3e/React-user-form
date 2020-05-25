import React, { Component} from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import AppBar from "material-ui/AppBar"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    state = {  }
    render() { 
        const {values, handleChange} = this.props
    
        return ( 
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Detail"/>
                    <TextField 
                    hintText="Enter your First Name" 
                    floatingLabelText="First Name"
                    onChange={handleChange("firstName")}
                    defaultValue={values.firstName}/>
                    <br/>
                    <TextField 
                    hintText="Enter your Last Name" 
                    floatingLabelText="Last Name"
                    onChange={handleChange("lastName")}
                    defaultValue={values.lastName}/>
                    <br/>
                    <TextField 
                    hintText="Enter your Email" 
                    floatingLabelText="Email"
                    onChange={handleChange("Email")}
                    defaultValue={values.Email}/>
                    <br/>
                    <RaisedButton label="Continue" 
                    primary={true} 
                    style={styles.button}
                    onClick={this.continue}/>
                </React.Fragment>
            </MuiThemeProvider>
         );
    }
}

const styles ={
    button:{
        margin:"15"
    }
}
 
export default FormUserDetails;