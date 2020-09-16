import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';
class Signin extends Component {
    render() {
        return (
            <div className="signin-form">
               <h1>  Sign In/ Sign Up</h1>
               <button onClick={signInWithGoogle}>  Sign In with Google </button>
               <button onClick={signInWithGoogle}>  Sign Up with Google </button>
            </div>
        );
    }
}

export default Signin;