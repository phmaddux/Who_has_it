import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class SignUp extends Component {
    state = {
        user: {
            username: "",
            email: "",
            password: "",
            picture: "",
        },
        newUser: {},
        refresh: false,
        flashError: false
    }

    handleChange = async (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.user }
        updateUser[attribute] = event.target.value
        this.setState({ user: updateUser })
        console.log(this.state.user)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post(`/api/users/`, {
                "user": this.state.user
            })
            this.setState({ refresh: true, newUser: response.data })
        } catch (error) {
            this.setState({ flashError: true })
            console.log(this.state.flashError)
        }

    }

    render() {
        if (this.state.refresh) {
            const userId = this.state.newUser.id;
            return <Redirect to={`/users/${userId}/people`} />
        }
        if (this.state.flashError) {
            let div = document.getElementById("flash")
            div.style.display = "block"
        }
        return (
            <div style={{ margin: "10px" }}>
                <h1>Sign Up</h1>
                <div id="flash" style={{ color: "red", display: "none" }}>Your 'Sign Up' form was either incomplete or incorrect. Please fill out the required fields and try again.</div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <TextField
                            onChange={this.handleChange} name="username"
                            type="text" value={this.state.user.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <TextField
                            onChange={this.handleChange} name="email"
                            type="text" value={this.state.user.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <TextField
                            onChange={this.handleChange} name="password"
                            type="text" value={this.state.user.password}
                        />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture</label>
                        <TextField
                            onChange={this.handleChange} name="picture"
                            type="text" value={this.state.user.picture}
                        />
                    </div>
                    <FlatButton label="Submit" type="submit" style={{
                        backgroundColor: "#72E0FF"
                    }} />
                </form>
            </div>
        );
    }
}

export default SignUp;