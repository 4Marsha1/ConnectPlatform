import styles from './Auth.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as UserSVG } from '../../icons/user.svg'

const LoginComponent = () => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}><UserSVG className={styles['svg']} /> Login</span>
            <form className={styles['form']}>
                <input className={styles['input']} type="email" placeholder='Email' />
                <input className={styles['input']} type="password" placeholder='Password' />
                <input className={styles['btn']} type="submit" value='Login' />
            </form>
            <Link to='/register' className={styles['redirect']}>
                Not a member? Register Now!
            </Link>
        </div>
    )
}

export default LoginComponent