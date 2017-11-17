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
import PersonCard from './PersonCard.js'
import SpecificItems from './SpecificItems.js'
import TextField from "material-ui/TextField"


class WhatDoTheyHave extends Component {
    state = {
        person: {},
        items: [],
        refresh: false,
        refresh2: false,
        editError: false,
        editForm: false,
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId
            const personId = this.props.match.params.personId
            console.log(1)
            const response = await axios.get(`/api/users/${userId}/people/${personId}/`)
            console.table(response.data)
            this.setState({ person: response.data })
        } catch (error) {
            console.log(error)
        }
        try {
            const personId = this.props.match.params.personId
            const response = await axios.get(`/api/people/${personId}/items`)
            console.table(response.data)
            this.setState({ items: response.data })
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = async (event) => {
        const attribute = event.target.name
        const updatePerson = { ...this.state.person }
        updatePerson[attribute] = event.target.value
        this.setState({ person: updatePerson })
        console.log(this.state.person)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const personId = this.props.match.params.personId            
            const response = await axios.patch(`/api/people/${personId}/`, {
                "person": this.state.person
            })
            this.setState({ refresh: true, person: response.data })
        } catch (error) {
            this.setState({ editFlashError: true })
            console.log(this.state.editFlashError)
        }
    }
    openEditSubmit = async (event) => {
        event.preventDefault()
        try {
            this.setState({ editField: true })
        } catch (error) {
            console.log(error)
        }
    }
    deleteSubmit = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId                    
        if(window.confirm(`Are you sure you want to delete this person?`)) {
            const personId = this.props.match.params.personId            
            const response = await axios.delete(`/api/people/${personId}/`)
            this.setState({ person: response.data , refresh2: true})
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.props.match.params.userId  
            const personId = this.props.match.params.personId                        
            return <Redirect to={`/users/${userId}/people/${personId}/items`} />
        }
        if (this.state.refresh2) {
            const userId = this.props.match.params.userId            
            return <Redirect to={`/users/${userId}/people/`} />
        }
        const personId = this.props.match.params.personId
        const editError = (
            <div style={{ color: "red"}}>Your edit form was either incomplete or incorrect. Please fill out the required fields and try again.</div>            
        )
        const editForm = (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="Nickname">Nickname:</label>
                        <TextField
                            onChange={this.handleChange} name="nickname"
                            type="text" value={this.state.person.nickname}
                        />
                    </div>
                    <div>
                    <label htmlFor="first_name">First name: </label>
                    <TextField
                        onChange={this.handleChange} name="first_name"
                        type="text" value={this.state.person.first_name}
                    />
                </div>
                <div>
                    <label htmlFor="last_name">Last name: </label>
                    <TextField
                        onChange={this.handleChange} name="last_name"
                        type="text" value={this.state.person.last_name}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <TextField
                        onChange={this.handleChange} name="email"
                        type="text" value={this.state.person.email}
                    />
                </div>
                <div>
                    <label htmlFor="phone_number">Phone number: </label>
                    <TextField
                        onChange={this.handleChange} name="phone_number"
                        type="text" value={this.state.person.phone_number}
                    />
                </div>
                <div>
                    <label htmlFor="picture">Picture Url: </label>
                    <TextField
                        onChange={this.handleChange} name="picture"
                        type="text" value={this.state.person.picture}
                    />
                </div>
                <div>
                    <label htmlFor="notes">Notes: </label>
                    <TextField
                        onChange={this.handleChange} name="notes"
                        type="text" value={this.state.person.notes}
                    />
                </div>
                    <FlatButton label="Submit" onClick={this.handleSubmit} style={{
                        backgroundColor: "#72E0FF"
                    }} />
                </form>
            </div>
        )
        return (
            <div>
                <NavBar />
                <p>What exactly did I lend {this.state.person.nickname}?</p>
                <PersonCard person={this.state.person} />
                        <FlatButton label="Would I lend to them again?" />
                        <FlatButton label="Edit" onClick={this.openEditSubmit}/>
                        <FlatButton label="Delete" onClick={this.deleteSubmit}/>
                        <FlatButton label="Add Item" />
                <div>
                   { this.state.editFlashError ? editError : null }
                </div>
                <div>
                    { this.state.editField ? editForm : null }
                </div>

                <p>What have I lent them?</p>
                <SpecificItems items={this.state.items} />
            </div>
        );
    }
}

export default withRouter(WhatDoTheyHave);