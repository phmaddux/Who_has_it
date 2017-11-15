import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"

class WhoHasIt extends Component {
    state = {
        people: [],
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/users/${userId}/people`)
            console.table(response.data)
            this.setState({ people: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const userId = this.props.match.params.userId
        return (
            <div>
                <NavBar />
                <p>Seriously, who has all my stuff?</p>
                <span>
                    <button>Buttons</button>
                    <button>Buttons</button>
                    <button>Buttons</button>
                </span>
                <br></br>
                <br></br>
                {this.state.people.map((person, index) => {
                    return (
                        <Card style={{
                            margin: "5px",
                        }}>
                            <CardMedia
                                overlay={<FlatButton href={`/users/${userId}/people/${person.id}/items`} title={`${person.nickname}`} />}>
                                <img src={person.picture} alt='' />
                            </CardMedia>
                            <CardText style={{
                                margin: "5px",
                            }}>
                                {person.nickname}
                            </CardText>
                        </Card>
                    )
                })}
            </div >
        );
    }
}

export default withRouter(WhoHasIt);