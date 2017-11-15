import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"

class WhatDoTheyHave extends Component {
    state = {
        person: {},
        items: [],
    }
    async componentWillMount() {
        try{
            const personId = this.props.match.params.personId            
            const response = await axios.get(`/api/people/${personId}`)
            console.table(response.data)
            this.setState({ person: response.data })
        } catch (error) {
            console.log(error)
        }
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
        const personId = this.props.match.params.personId        
        return (
            <div>
                <NavBar />
                <p>What exactly did I lend them? {this.state.person.nickname}</p>
                <span>
                    <button>Buttons</button>
                    <button>Buttons</button>
                    <button>Buttons</button>
                </span>
                <br></br>
                <br></br>
                {this.state.items.map((item, index) => {
                    return (
                        <GridList style={{
                            
                        }}>
                            <GridTile
                            key={item.picture}
                            title={item.name}
                            >
                            <img src={item.picture} />
                            {/* overlay={
                                <FlatButton containerElement={
                                    <Link to={`/people/${item.id}/items`} > Click HERE! </Link>
                                } title={`${item.name}`}>Imma Button</FlatButton>
                            }>
                            <img src={item.picture} alt='' /> */}
                            </GridTile>
                        </GridList>
                    )
                })}
            </div>
        );
    }
}

export default withRouter(WhatDoTheyHave);