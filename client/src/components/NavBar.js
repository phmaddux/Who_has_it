import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.div` 
display: flex;
justify-content: space-around;
align-items: center;
font-size: 1.7rem;
`
const HeaderLink = styled.div`
display: flex;
align-items: center;
text-decoration: none;
padding: 20px;
`
class NavBar extends Component {

    render() {
        const userId = this.props.match.params.userId
        return (
            <StyledNavBar>
                <HeaderLink>
                    <Link to={`/users/${userId}/people`}>Who Has It?</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link to={`/users/${userId}/items`}>What Did I Lend?</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link to={`/users/${userId}`}>Your Profile</Link>
                </HeaderLink>
                <HeaderLink>
                    <Link to={'/'}>Log out</Link>
                </HeaderLink>
                <br></br>
            </StyledNavBar>
        );
    }
}

export default withRouter(NavBar);