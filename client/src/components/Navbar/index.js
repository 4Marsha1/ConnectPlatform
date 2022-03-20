import styles from './Navbar.module.css';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/auth';

const Navbar = (props) => {
    const { isSidebarOpen, toggleSidebar } = props
    return (
        <nav className={styles['navbar']}>
            <Link className={styles['btn']} to='/'>
                <span className={styles['logo']}>ConnectPlatform</span>
            </Link>
            <div className={styles['links']}>
                {
                    props.token !== null ?
                        <>
                            <Link className={styles['btn']} to='/profile'>
                                <span className={styles['link']}>Dashboard</span>
                            </Link> |
                            <button className={styles['btn']} onClick={() => props.dispatch(logoutUser())}>
                                <span className={styles['link']}>Logout</span>
                            </button>
                        </>
                        :
                        <>
                            <span className={styles['link']}>Developers</span> |
                            <Link className={styles['btn']} to='/register'>
                                <span className={styles['link']}>Register</span>
                            </Link> |
                            <Link className={styles['btn']} to='/login'>
                                <span className={styles['link']}>Login</span>
                            </Link>
                        </>
                }
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

const mapStateToProps = state => {
    return {
        token: state.authReducer.token
    }
}

export default connect(mapStateToProps)(Navbar)