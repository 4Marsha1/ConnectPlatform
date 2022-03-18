import React, { Component } from 'react'
import LoginComponent from '../components/Auth/LoginComponent';
class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <LoginComponent />
        );
    }
}

export default Login;