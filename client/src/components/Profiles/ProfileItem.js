import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'

const ProfileItem = ({ profile }) => {
    return (
        <div className={styles['card']}>
            {
                profile.user.avatar ?
                    <img className={styles['img']} src={profile.user.avatar} alt="" /> :
                    <div className={styles['empty']}></div>
            }
            <div className={styles['details']}>
                <span className={styles['name']}>{profile.user.name}</span>
                <span className={styles['status']}>{profile.status} {profile.company && <span>{profile.company}</span>}</span>
                <span className={styles['location']}>{profile.location && <span>{profile.location}</span>}</span>
                <div className={styles['skills']}>
                    {
                        profile.skills.slice(0, 4).map((skill, idx) => {
                            return <span key={idx} className={styles['skill']}>{skill}</span>
                        })
                    }
                </div>
                <Link className={styles['view']} to={`/profile/${profile._id}`} >
                    View Profile
                </Link>
            </div>
        </div>
    )
}

export default ProfileItem