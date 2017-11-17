import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import ProfileCard from './ProfileCard.js'
import TextField from "material-ui/TextField"
import styled from 'styled-components'

const StyledWriting = styled.h3`
text-align: center;
`
class YourProfile extends Component {
    state = {
        user: {},
        refresh: false,
        editField: false,
        editFlashError: false
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId      
            console.log(userId)      
            const response = await axios.get(`/api/users/${userId}/`)
            console.table(response.data)
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
        }
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
            console.log(1)
            const userId = this.props.match.params.userId            
            console.log(2)
            const response = await axios.patch(`/api/users/${userId}`, {
                "user": this.state.user
            })
            this.setState({ refresh: true, user: response.data })
        } catch (error) {
            this.setState({ editFlashError: true })
            console.log(this.state.editFlashError)
        }
    }
    openEditSubmit = async (event) => {
        event.preventDefault()
        try {
            this.setState({ editField: true })
        } catch (error) {
            console.log(error)
        }
    }
    deleteSubmit = async (event) => {
        event.preventDefault()
        if(window.confirm(`Are you sure you want to delete your profile?`)) {
            const userId = this.props.match.params.userId
            const response = await axios.delete(`/api/users/${userId}/`)
            this.setState({ user: response.data })
            return <Redirect to={`/`} />
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.props.match.params.userId            
            return <Redirect to={`/users/${userId}/people`} />
        }

        const editError = (
            <div style={{ color: "red"}}>Your edit form was either incomplete or incorrect. Please fill out the required fields and try again.</div>            
        )
        const editForm = (
            <div>
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
                    <FlatButton label="Submit" onClick={this.handleSubmit} style={{
                        backgroundColor: "#72E0FF"
                    }} />
                </form>
            </div>
        )

        return (
            <div>
                <NavBar />
                <StyledWriting>Your information</StyledWriting>
                <ProfileCard user={this.state.user} />
                <span>
                    <FlatButton label="Edit Profile" onClick={this.openEditSubmit} />
                    <FlatButton label="Delete Profile" onClick={this.deleteSubmit} />
                </span>
                <div>
                   { this.state.editFlashError ? editError : null }
                </div>
                <div>
                    { this.state.editField ? editForm : null }
                </div>
            </div >
        );
    }
}

export default withRouter(YourProfile);