import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class LogIn extends Component {
    state = {
        user: {
            username: "",
            password: "",
        },
        refresh: false,
        logInFalshError: false
    }

    handleChange = async (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.user }
        updateUser[attribute] = event.target.value
        this.setState({ user: updateUser })
        console.log(this.state.user)
    }

    logIn = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get()

        } catch (error) {
            this.setState({ logInFlashError: true })
            console.log(this.state.logInFalshError)
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.state.newUser.id;
            return <Redirect to={`/users/${userId}/people`} />
        }
        if (this.state.logInFlashError) {
            let div = document.getElementById("logInlogInFlash")
            div.style.display = "block"
        }
        return (
            <div style={{ margin: "10px" }}>
                <h1>Log In</h1>
                <form>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <TextField
                        onChange={this.handleChange}
                        type="text" name="email" value={this.state.username} 
                    />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <TextField
                        onChange={this.handleChange}
                        type="password" name="password" value={this.state.password}
                    />
                    </div>
                    <FlatButton label="Log In" type="submit" style={{
                        backgroundColor: "#72E0FF"
                    }}/>
                    <div id="logInFlash" style={{color: "red", display: "none"}}>Your Sign In was either incomplete or incorrect. Please fill out the required fields and try again.</div>
                </form>
            </div>
        );
    }
}

export default LogIn;