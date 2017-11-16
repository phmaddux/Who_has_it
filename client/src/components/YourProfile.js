import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import Avatar from 'material-ui/Avatar';
import ProfileCard from './ProfileCard.js'

class YourProfile extends Component {
    state = {
        user: {},
    }
    async componentWillMount() {
        try {
            console.log(1)
            const userId = this.props.match.params.userId
            console.log(userId)
            const response = await axios.get(`/api/users/${userId}/`)
            console.log(3)
            console.table(response.data)
            this.setState({ user: response.data })
            console.table(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <p>Your information</p>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                </span>
                <br></br>
                <br></br>
                <ProfileCard user={this.state.user}/>
            </div >
        );
    }
}

export default withRouter(YourProfile);