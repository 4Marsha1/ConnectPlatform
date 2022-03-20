import { useNavigate } from 'react-router-dom'
import styles from './Dashboard.module.css'

const Dashboard = ({ user, profile }) => {
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

                    </>
            }
        </div>
    )
}

export default Dashboard