import LoginComponent from '../components/Auth/LoginComponent';
import { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../redux/actions/alerts';
import { loginUser } from '../redux/actions/auth';
import { useEffect } from 'react';

const Login = (props) => {
    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.dispatch(setAlert('Logged in Successfully', 'SUCCESS', 3000))
        } else if (props.auth.isAuthenticated === false) {
            props.dispatch(setAlert("Login Failed", "FAILED", 3000));
        }
    }, [props.auth.isAuthenticated])
    const [user, setUser] = useState({
        email: '', password: '',
    })
    const { email, password } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            props.dispatch(setAlert("Incomplete Fields", "FAILED", 3000));
        } else {
            await props.dispatch(loginUser(email, password))
        }
    }
    return (
        <LoginComponent
            email={email}
            password={password}
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

export default connect(mapStateToProps)(Login)