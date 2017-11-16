import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import PersonCard from './PersonCard'
import SpecificItems from './SpecificItems'


class WhatDoTheyHave extends Component {
    state = {
        person: {},
        items: [],
    }
    async componentWillMount() {
        try {
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
        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            gridList: {
                width: 400,
                height: 400,
                overflowY: 'auto',
                cols: 4,
            },
        };
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
                <PersonCard person={this.state.person} />
                <br></br>
                <SpecificItems items={this.state.person} />
            </div>
        );
    }
}

export default withRouter(WhatDoTheyHave);