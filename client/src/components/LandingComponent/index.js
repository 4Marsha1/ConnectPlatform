import styles from './Landing.module.css';
import bg from '../../images/bg.jpg'

const LandingComponent = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['image-wrapper']}>
                <img className={styles['image']} src={bg} alt="bg" />
            </div>
            <div className={styles['overlay']}>
                <span className={styles['header']}>Welcome to ConnectPlatform!</span>
                <div className={styles['btns']}>
                    <button className={styles['btn']}>Register</button>
                    <button className={styles['btn']}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent