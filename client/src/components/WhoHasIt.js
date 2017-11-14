import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import NewPersonForm from "./NewPersonForm.js"

class WhoHasIt extends Component {

    state = {
        people: [],
        newPerson: {},
        refresh: false,
        newUser: false,
        flashError: false
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
    newPerson = async (event) => {
        event.preventDefault()
        try {
            this.setState({ newUser: true })
        } catch (error) {
            console.log("No more people")
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.props.match.params.userId                        
            return <Redirect to={`/users/${userId}/people`} />
        }
        if (this.state.newUser) {
            let div = document.getElementById("newUser")
            div.style.display = "block"
        }
        return (
            <div>
                <NavBar />
                <span>
                    <button onClick={this.newPerson}>New Person</button>
                    <button>Buttons</button>
                </span>
                <div>
                    <br></br>
                    <div id="newUser" style={{display: "none" }}>
                    New User!
                    <NewPersonForm />
                    </div>
                <br></br>
                    {this.state.people.map((person, index) => {
                        return (
                            <Card style={{
                                margin: "5px",
                            }}>
                                <CardMedia
                                    overlay={<FlatButton href={`/people/${person.id}`} title={`${person.nickname}`} />}>
                                    <img src={person.picture} alt=''/>
                                </CardMedia>
                                <CardText style={{
                                     margin: "5px", 
                                }}>
                                    {person.nickname}
                                </CardText>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(WhoHasIt);