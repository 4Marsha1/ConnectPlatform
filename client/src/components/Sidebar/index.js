import styles from './Sidebar.module.css';

const Sidebar = ({ toggleSidebar }) => {
    return (
        <div className={styles['sidebar']}>
            <button className={styles['close']} onClick={toggleSidebar} >&times;</button>
            <div className={styles['links']}>
                <span className={styles['link']}>Developers</span>
                <span className={styles['link']}>Register</span>
                <span className={styles['link']}>Login</span>
            </div>
            <div className={styles['copyright']}>
                <span>&copy; Abhishek</span>
                <span>March 2022</span>
                <span>V 1.0.0</span>
            </div>
        </div>
    )
}

export default Sidebar