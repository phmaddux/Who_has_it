import React, { Component } from 'react';
import LogIn from './LogIn.js'
import SignUp from './SignUp.js'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Who Has It?</h1>
                <h2>A service for users to help keep track of their belongings when they have been loaned out, and whether or not they should lend something to that person again.</h2>
                <h4>Sign in if you already have a profile!</h4>
                <h4>Or...</h4>
                <h4>Join us if you don't!</h4>
                <h3>Because let's face it, life is better when you know where all your stuff is.'</h3>
                <span>
                    <SignUp />
                    <p>Or</p>
                    <LogIn />     
                </span>
            </div>
        );
    }
}

export default Homepage;