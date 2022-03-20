import { useState } from 'react';
import { connect } from 'react-redux';
import RegisterComponent from '../components/Auth/RegisterComponent';
import { setAlert } from '../redux/actions/alerts';
import { registerUser } from '../redux/actions/auth';

const Register = (props) => {
    const [user, setUser] = useState({
        name: '', email: '', password1: '', password2: ''
    })
    const { name, email, password1, password2 } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password1 || !password2) {
            props.dispatch(setAlert("Incomplete Fields", "FAILED", 3000));
        } else if (password1 !== password2) {
            props.dispatch(setAlert("Password don't match", "FAILED", 3000));
        } else {
            await props.dispatch(registerUser(name, email, password1))
            if (props.auth.isAuthenticated) {
                props.dispatch(setAlert('Registered Successfully', 'SUCCESS', 3000));
            } else {
                props.dispatch(setAlert("Registration Failed", "FAILED", 3000));
            }
        }
    }
    return (
        <RegisterComponent
            name={name}
            email={email}
            password1={password1}
            password2={password2}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(Register)