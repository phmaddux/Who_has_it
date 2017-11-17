import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components'

const Column = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`
class LogIn extends Component {
    state = {
        user: {
            username: "",
            password: "",
        },
        userCheck: {},
        refresh: false,
        logInFlashError: false
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
            const response = await axios.get(`/api/users/${this.state.user.username}`)
            this.setState({ userCheck: response.data })
            console.log(this.state.userCheck)
            if (this.state.userCheck.password === this.state.user.password) {
                this.setState({ refresh: true })
            }
            else this.setState({ logInFlashError: true })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.state.userCheck.id;
            return <Redirect to={`/users/${userId}/people`} />
        }
        if (this.state.logInFlashError) {
            let div = document.getElementById("logInFlash")
            div.style.display = "block"
        }
        return (
            <Column style={{ margin: "10px" }}>
                <h1>Log In</h1>
                <div id="logInFlash" style={{ color: "red", display: "none" }}>Your Login In was either incomplete or incorrect. Please fill out the required fields and try again.</div>
                <form onSubmit={this.logIn}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        <TextField
                            onChange={this.handleChange}
                            type="text" name="username" value={this.state.username}
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
                    }} />
                </form>
            </Column>
        );
    }
}

export default LogIn;