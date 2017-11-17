import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import NavBar from "./NavBar.js"
import WhatGrid from "./WhatGrid.js"
import styled from 'styled-components'

const StyledWriting = styled.h3`
text-align: center;
`
class WhatDidILend extends Component {
    state = {
        items: [],
    }
    async componentWillMount() {
        try {
            const userId = this.props.match.params.userId
            const response = await axios.get(`/api/users/${userId}/items`)
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
                <StyledWriting>Okay, what's missing from my life?</StyledWriting>
                <WhatGrid
                    items={this.state.items}
                    userId={this.props.match.params.userId}
                />
            </div>
        );
    }
}

export default withRouter(WhatDidILend);