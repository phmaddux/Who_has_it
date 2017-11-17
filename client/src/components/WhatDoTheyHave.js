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
import styled from 'styled-components'

const Styled = styled.h1`
font-size: 1.3rem;
text-align: center;
`
class WhatDoTheyHave extends Component {
    state = {
        person: {
            item: {},
        },
        items: [],
        refresh: false,
        refresh2: false,
        editError: false,
        editForm: false,
        editItemError: false,
        editItemField: false,
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
    handleEditSubmit = async (event) => {
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
    handleAddSubmit = async (event) => {
        event.preventDefault()
        try {
            const personId = this.props.match.params.personId
            const response = await axios.post(`/api/people/${personId}/items`, {
                "item": this.state.person.items
            })
            this.setState({ refresh: true, items: response.data })
        } catch (error) {
            this.setState({ addFlashError: true })
            console.log(this.state.addFlashError)
        }
    }
    openAddSubmit = async (event) => {
        event.preventDefault()
        try {
            this.setState({ addField: true })
        } catch (error) {
            console.log(error)
        }
    }
    deleteSubmit = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        if (window.confirm(`Are you sure you want to delete this person?`)) {
            const personId = this.props.match.params.personId
            const response = await axios.delete(`/api/people/${personId}/`)
            this.setState({ person: response.data, refresh2: true })
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.props.match.params.userId
            const personId = this.props.match.params.personId
            return <Redirect to={`/users/${userId}/people/`} />
        }
        if (this.state.refresh2) {
            const userId = this.props.match.params.userId
            return <Redirect to={`/users/${userId}/people/`} />
        }
        const personId = this.props.match.params.personId
        const editError = (
            <div style={{ color: "red" }}>
                <p>Your edit form was either incomplete or incorrect.</p>
                <p>Please fill out the required fields and try again.</p>
            </div>
        )
        const addError = (
            <div style={{ color: "red" }}>
                <p>Your add form was either incomplete or incorrect.</p>
                <p>Please fill out the name and description and try again.</p>
            </div>
        )
        const addForm = (
            <div>
                <form onSubmit={this.handleAddSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <TextField
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.items.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture Url:</label>
                        <TextField
                            onChange={this.handleChange} name="picture"
                            type="text" value={this.state.items.picture}
                        />
                    </div>
                    <div>
                        <label htmlFor="condition_outgoing">Outgoing Condition:</label>
                        <TextField
                            onChange={this.handleChange} name="condition_outgoing"
                            type="text" value={this.state.items.condition_outgoing}
                        />
                    </div>
                    <div>
                        <label htmlFor="condition_returned">Returned Condition:</label>
                        <TextField
                            onChange={this.handleChange} name="condition_returned"
                            type="text" value={this.state.items.condition_returned}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Item Description:</label>
                        <TextField
                            onChange={this.handleChange} name="description"
                            type="text" value={this.state.items.description}
                        />
                    </div>
                    <FlatButton label="Submit" onClick={this.handleAddSubmit} style={{
                        backgroundColor: "#72E0FF"
                    }} />
                </form>
            </div>
        )
        const editForm = (
            <div>
                <form onSubmit={this.handleEditSubmit}>
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
                    <FlatButton label="Submit" onClick={this.handleEditSubmit} style={{
                        backgroundColor: "#72E0FF"
                    }} />
                </form>
            </div>
        )
        return (
            <div>
                <NavBar />
                <PersonCard person={this.state.person} />
                <FlatButton label="Would I lend to them again?" />
                <FlatButton label="Edit" onClick={this.openEditSubmit} />
                <FlatButton label="Add Item" onClick={this.openAddSubmit} />
                <FlatButton label="Delete" onClick={this.deleteSubmit} />
                <div>
                    {this.state.editFlashError ? editError : null}
                </div>
                <div>
                    {this.state.editField ? editForm : null}
                </div>
                <div>
                    {this.state.addFlashError ? addError : null}
                </div>
                <div>
                    {this.state.addField ? addForm : null}
                </div>
                <Styled>What exactly did I lend {this.state.person.nickname}?</Styled>
                <SpecificItems items={this.state.items} />
            </div>
        );
    }
}

export default withRouter(WhatDoTheyHave);