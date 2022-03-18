import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as UserSVG } from '../../icons/user.svg'
import { useState } from 'react'

const RegisterComponent = () => {
    const [user, setUser] = useState({
        name: '', email: '', password1: '', password2: ''
    })
    const { name, email, password1, password2 } = user
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            console.log("Password don't match");
            return
        }
        console.log(user);
    }
    return (
        <div className={styles['container']}>
            <span className={styles['header']}><UserSVG className={styles['svg']} /> SignUp</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <input
                    className={styles['input']}
                    type="text"
                    name='name'
                    value={name}
                    onChange={handleChange}
                    placeholder='Name'
                />
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
                    name='password1'
                    value={password1}
                    onChange={handleChange}
                    placeholder='Password'
                />
                <input
                    className={styles['input']}
                    type="password"
                    name='password2'
                    value={password2}
                    onChange={handleChange}
                    placeholder='Confirm Password'
                />
                <input
                    className={styles['btn']}
                    type="submit"
                    value='Register'
                />
            </form>
            <Link to='/login' className={styles['redirect']}>
                Already a member? Login
            </Link>
        </div>
    )
}

export default RegisterComponent