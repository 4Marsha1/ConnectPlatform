import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as UserSVG } from '../../icons/user.svg'

const RegisterComponent = () => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}><UserSVG className={styles['svg']} /> SignUp</span>
            <form className={styles['form']}>
                <input className={styles['input']} type="text" placeholder='Name' />
                <input className={styles['input']} type="email" placeholder='Email' />
                <input className={styles['input']} type="password" placeholder='Password' />
                <input className={styles['input']} type="password" placeholder='Confirm Password' />
                <input className={styles['btn']} type="submit" value='Register' />
            </form>
            <Link to='/login' className={styles['redirect']}>
                Already a member? Login
            </Link>
        </div>
    )
}

export default RegisterComponent