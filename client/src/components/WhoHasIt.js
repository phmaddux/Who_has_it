import React, { Component } from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from "./NavBar.js"

class WhoHasIt extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <p>Hello World</p>
            </div>
        );
    }
}

export default WhoHasIt;