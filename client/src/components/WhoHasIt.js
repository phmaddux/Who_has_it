import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"

class WhoHasIt extends Component {

    state = {
        people: []
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId            
            const response = await axios.get(`/api/users/${userId}/people`)
            console.table(response.data)
            this.setState({people: response.data})
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <span>
                    <p>Buttons</p>
                </span>
                <div>
                    {this.state.people.map((person, index) => {
                        return (
                            <Card style={{
                                margin: "5px",
                            }}>
                                <CardMedia
                                    overlay={<FlatButton href={`/people/${person.id}`} title={person.name} />}>
                                    <img src={person.picture} alt='${person.name} pic' />
                                </CardMedia>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(WhoHasIt);