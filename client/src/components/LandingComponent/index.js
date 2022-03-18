import styles from './Landing.module.css';
import bg from '../../images/bg.jpg'
import { Link } from 'react-router-dom';

const LandingComponent = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['image-wrapper']}>
                <img className={styles['image']} src={bg} alt="bg" />
            </div>
            <div className={styles['overlay']}>
                <span className={styles['header']}>Welcome to ConnectPlatform!</span>
                <div className={styles['btns']}>
                    <Link style={{ textDecoration: 'none' }} to='/register'>
                        <span className={styles['btn']}>Register</span>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <span className={styles['btn']}>Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent