import React, { Component } from 'react';
// import LogIn from './components/LogIn.js'
import SignUp from './SignUp.js'

class Homepage extends Component {
    render() {
        return (
            <div>
                <h2>'Who has it? A service for users to help keep track of their belongings when they have been loaned out, and whether or not they should lend something to that friend again.</h2>
                <h4>Sign in if you already have a profile!</h4>
                <h4>or</h4>
                <h4>Join us if you don't!</h4>
                <h3>Because let's face it, life is better when you know where all your stuff is.'</h3>
                <span>
                    <SignUp />
                    {/* <LogIn />      */}
                </span>
            </div>
        );
    }
}

export default Homepage;