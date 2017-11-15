import React, { Component } from 'react';
import styled from 'styled-components'
import {Link, withRouter } from 'react-router-dom'


class NavBar extends Component {

    render() {
        const userId = this.props.match.params.userId
        return (
            <div>
                <span>
                <Link to={`/users/${userId}/people`}>Who Has It?</Link>
                <Link to={`/users/${userId}/items`}>What did I lend?</Link>
                <Link to={`/users/${userId}`}>Your Profile</Link>
                <Link to={'/'}>Log out</Link>
                </span>
                <br></br>
            </div>
        );
    }
}

export default withRouter(NavBar);