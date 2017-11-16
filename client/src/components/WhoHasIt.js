import React, { Component } from 'react';
import axios from 'axios'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Redirect, Link, withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import WhoGrid from "./WhoGrid.js"

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
               <WhoGrid people={this.state.people} userId={this.props.match.params.userId} />
            </div >
        );
    }
}

export default withRouter(WhoHasIt);