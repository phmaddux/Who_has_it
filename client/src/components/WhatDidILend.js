import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import NewPersonForm from "./NewPersonForm.js"

class WhatDidILend extends Component {
    state = {
        items: [],
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId            
            const response = await axios.get(`/api/users/${userId}/items`)
            console.table(response.data)
            this.setState({items: response.data})
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const userId = this.props.match.params.userId            
        return (
            <div>
               <NavBar />
               <br></br>
                <span>
                    <button>Buttons</button>
                    <button>Buttons</button>
                    <button>Buttons</button>
                </span>
                <br></br>
                {/* <span>
                    <button onClick={this.newPerson}>New Person</button>
                    <button>Buttons</button>
                </span>
                <div>
                    <br></br>
                    <div id="newUser" style={{display: "none" }}>
                    <NewPersonForm />
                    </div> */}
                <br></br>
                    {this.state.items.map((item, index) => {
                        return (
                            <Card style={{
                                margin: "5px",
                            }}>
                                <CardMedia
                                    overlay={<FlatButton href={`/users/${userId}/people/${item.person_id}/items`} title={`${item.name}`} />}>
                                    <img src={item.picture} alt=''/>
                                </CardMedia>
                                <CardText style={{
                                     margin: "5px", 
                                }}>
                                    {item.name}
                                </CardText>
                            </Card>
                        )
                    })}
                </div>
            // </div>
        );
    }
}

export default withRouter(WhatDidILend);