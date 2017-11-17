import React, { Component } from 'react';
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

const StyledNavBar = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
`
const HeaderLink = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
text-decoration: none;
font-size: 1.5rem;
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