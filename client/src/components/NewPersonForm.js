import React, { Component } from 'react';
import axios from 'axios'
import { Redirect, withRouter } from 'react-router-dom'
import TextField from "material-ui/TextField"
import FlatButton from 'material-ui/FlatButton';

class NewPersonForm extends Component {
    state = {
        person: {
            item: {},
        },
        refresh: false,
        newPersonFlashError: false,
    }
    handleChange = async (event) => {
        const attribute = event.target.name
        const updatePerson  = { ...this.state.person }
        updatePerson[attribute] = event.target.value
        this.setState({ person: updatePerson })
        console.log(this.state.person)
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const userId = this.props.match.params.userId 
            const response = await axios.post(`/api/users/${userId}/people`, {
                "person": this.state.person
            })
            console.log(response)
            this.setState({ item: response.data})
            this.setState({ refresh: true, person: response.data })
        } catch (error) {
            this.setState({ newPersonFlashError: true })
            console.log(this.state.newPersonFlashError)
        }
    }
    render() {
        if (this.state.refresh) {
            const userId = this.props.match.params.userId                        
            return <Redirect to={`/users/${userId}/people`} />
        }
        if (this.state.newPersonFlashError) {
            let div = document.getElementById("newPersonFlash")
            div.style.display = "block"
        }
        return (
            <div style={{ margin: "10px" }}>
                <div id="newPersonFlash" style={{ color: "red", display: "none" }}>
                <p>Your new person form was either incomplete or incorrect. You have to at least have a nickname, an item name, and a description.</p>
                <p>If you don't, you probably don't know them well enough to lend them your things...</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nickname">Nickname: </label>
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
                    <div>
                        <label htmlFor="name">Item: </label>
                        <TextField
                            onChange={this.handleChange} name="name"
                            type="text" value={this.state.person.item.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="picture">Picture Url: </label>
                        <TextField
                            onChange={this.handleChange} name="picture"
                            type="text" value={this.state.person.item.picture}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Item Description: </label>
                        <TextField
                            onChange={this.handleChange} name="description"
                            type="text" value={this.state.person.item.description}
                        />
                    </div>
                    <div>
                    <FlatButton label="Submit" type="submit" style={{
                        backgroundColor: "#72E0FF"
                    }} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(NewPersonForm);