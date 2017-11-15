import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"

class YourProfile extends Component {
    state = {
        user: {},
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/users/${userId}`)
            console.table(response.data)
            this.setState({ user: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <p>Seriously, who has all my stuff?</p>
                <span>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Buttons</button>
                </span>
                <br></br>
                <br></br>
                <Card style={{
                    margin: "5px",
                }}>
                    <CardMedia
                        overlay={<FlatButton href={`/`} title={`${this.state.user.username}`} />}>
                        <img src={this.state.user.picture} alt='' />
                    </CardMedia>
                    <CardText style={{
                        margin: "5px",
                    }}>
                        {this.state.user.username}
                    </CardText>
                </Card>
            </div >
        );
    }
}

export default withRouter(YourProfile);