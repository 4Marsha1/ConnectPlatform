import { Link, useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'

const Dashboard = ({ user, profile, handleDeleteAccount }) => {
    const navigate = useNavigate();
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Dashboard</span>
            <span className={styles['greet']}>Hello {user && user.name}</span>
            {
                profile.msg ?
                    <>
                        <span className={styles['msg']}>You don't have a profile</span>
                        <button className={styles['create-btn']} onClick={() => navigate('/create-profile')} >Create Profile</button>
                    </> :
                    <>
                        <div className={styles['links']}>
                            <Link className={styles['link']} to='/edit-profile'>
                                Edit Profile
                            </Link>
                            <Link className={styles['link']} to='/add-education'>
                                Add Education
                            </Link>
                            <Link className={styles['link']} to='/add-experience'>
                                Add Experience
                            </Link>
                            <button className={styles['delete-account-btn']}
                                onClick={() => handleDeleteAccount()}>Delete Account</button>
                        </div>
                    </>
            }
        </div>
    )
}

export default Dashboard