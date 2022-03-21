import ProfileItem from './ProfileItem'
import styles from './Profiles.module.css'

const Profiles = ({ profiles }) => {
    return (
        <div className={styles['container']} >
            <span className={styles['header']}>Developers</span>
            <span className={styles['greet']}>Connect with fellow developers</span>
            {
                profiles.length > 0 ?
                    profiles.map(profile => {
                        return <ProfileItem key={profile._id} profile={profile} />
                    }) :
                    <h4>No Profile Found.. </h4>
            }
        </div>
    )
}

export default Profiles