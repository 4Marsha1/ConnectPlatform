import React, { Component } from 'react';
import RegisterComponent from '../components/Auth/RegisterComponent';

class Register extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <RegisterComponent />
        );
    }
}

export default Register;