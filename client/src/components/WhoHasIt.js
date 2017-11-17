import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'
import NavBar from "./NavBar.js"
import WhoGrid from "./WhoGrid.js"
import styled from 'styled-components'
import NewPersonForm from './NewPersonForm'

const StyledWriting = styled.h3`
text-align: center;
`
class WhoHasIt extends Component {
    state = {
        people: [],
        newPerson: false,
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
    openNewPerson = async (event) => {
        event.preventDefault()
        try {
            this.setState({ newPerson: true })
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const newPerson = (
            <NewPersonForm />
        )
        return (
            <div>
                <NavBar />
                <StyledWriting>Seriously, who has all my stuff?</StyledWriting>
                <WhoGrid people={this.state.people} userId={this.props.match.params.userId} />
                <span>
                    <FlatButton label="New Person" onClick={this.openNewPerson} />
                    { this.state.newPerson ? newPerson : null }
                </span>
            </div >
        );
    }
}

export default withRouter(WhoHasIt);