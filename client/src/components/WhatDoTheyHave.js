import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"

class WhatDoTheyHave extends Component {
    state = {
       items: [],
    }
    async componentWillMount() {
        try {
            const personId = this.props.match.params.personId
            const response = await axios.get(`/api/people/${personId}/items`)
            console.table(response.data)
            this.setState({ items: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
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
                {this.state.items.map((item, index) => {
                    return (
                        <Card style={{
                            margin: "10px",
                        }}>
                            <CardMedia
                            overlay={
                                <FlatButton containerElement={
                                    <Link to={`/people/${item.id}/items`} > Click HERE! </Link>
                                } title={`${item.name}`}>Imma Button</FlatButton>
                            }>
                            <img src={item.picture} alt='' />
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
        );
    }
}

export default withRouter(WhatDoTheyHave);