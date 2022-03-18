import styles from './Navbar.module.css';
import Sidebar from '../Sidebar';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <nav className={styles['navbar']}>
            <span className={styles['logo']}>ConnectPlatform</span>
            <div className={styles['links']}>
                <span className={styles['link']}>Developers</span> |
                <Link style={{ textDecoration: 'none' }} to='/register'>
                    <span className={styles['link']}>Register</span>
                </Link> |
                <Link style={{ textDecoration: 'none' }} to='/login'>
                    <span className={styles['link']}>Login</span>
                </Link>
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