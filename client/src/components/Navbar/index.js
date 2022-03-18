import styles from './Navbar.module.css';
import Sidebar from '../Sidebar';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <nav className={styles['navbar']}>
            <span className={styles['logo']}>ConnectPlatform</span>
            <div className={styles['links']}>
                <span className={styles['link']}>Developers</span> |
                <span className={styles['link']}>Register</span> |
                <span className={styles['link']}>Login</span>
            </div>
            {
                isSidebarOpen ? <Sidebar toggleSidebar={toggleSidebar} /> :
                    <div className={styles['hamburger']} onClick={toggleSidebar}>
                        <span className={styles['hr']}></span>
                        <span className={styles['hr']}></span>
                        <span className={styles['hr']}></span>
                    </div>
            }
        </nav>
    )
}

export default Navbar