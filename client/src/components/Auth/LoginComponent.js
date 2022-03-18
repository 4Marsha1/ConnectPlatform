import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as UserSVG } from '../../icons/user.svg'
import { useState } from 'react'
import Alert from '../Alert'
import { connect } from 'react-redux'
import { setAlert } from '../../redux/actions/alerts'

const LoginComponent = (props) => {
    const [user, setUser] = useState({
        email: '', password: '',
    })
    const { email, password } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            props.dispatch(setAlert("Incomplete Fields", "FAILED", 3000));
        } else {
            props.dispatch(setAlert('Registered Successfully', 'SUCCESS', 3000))
        }
    }
    return (
        <div className={styles['container']}>
            <Alert />
            <span className={styles['header']}><UserSVG className={styles['svg']} /> Login</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input
                    className={styles['input']}
                    type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Email'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input
                    className={styles['btn']}
                    type="submit"
                    value='Login'
                />
            </form>
            <Link to='/register' className={styles['redirect']}>
                Not a member? Register Now!
            </Link>
        </div>
    )
}

export default connect()(LoginComponent);