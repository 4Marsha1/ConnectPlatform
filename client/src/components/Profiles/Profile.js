import { Link } from 'react-router-dom'
import styles from './Profiles.module.css'
import Moment from 'react-moment'
import { ReactComponent as Website } from '../../icons/website.svg'
import { ReactComponent as Facebook } from '../../icons/facebook.svg'
import { ReactComponent as Twitter } from '../../icons/twitter.svg'
import { ReactComponent as Instagram } from '../../icons/instagram.svg'
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg'
import { ReactComponent as Youtube } from '../../icons/youtube.svg'
import { ReactComponent as Point } from '../../icons/point.svg'

const Profile = ({ auth, profile, repos }) => {
    return (
        <div className={styles['container']}>
            {
                profile ?
                    <div className={styles['profile']}>
                        <div className={styles['btns']}>
                            <Link className={styles['back']} to='/developers'>Back to developers</Link>
                            {
                                auth.isAuthenticated && auth.user && auth.user._id === profile.user._id ?
                                    <Link className={styles['view']} to='/edit-profile'>Edit Profile</Link> : null
                            }
                        </div>
                        <div className={styles['top-section']}>
                            {
                                profile.user ?
                                    <>
                                        <img className={styles['img']} src={profile.user.avatar} alt="" />
                                        <span className={styles['name']}>{profile.user.name}</span>
                                    </> : null
                            }
                            <span className={styles['status']}>{profile.status} {profile.company && <span>{profile.company}</span>}</span>
                            <span className={styles['location']}>{profile.location && <span>{profile.location}</span>}</span>
                            <div className={styles['links']}>
                                {profile.website && <a href={profile.website} target="_blank"><Website className={styles['svg']} /></a>}
                                {
                                    profile.social ?
                                        <>
                                            {profile.social.facebook && <a href={profile.social.facebook} target="_blank"> <Facebook className={styles['svg']} /> </a>}
                                            {profile.social.twitter && <a href={profile.social.twitter} target="_blank"><Twitter className={styles['svg']} /></a>}
                                            {profile.social.instagram && <a href={profile.social.instagram} target="_blank"><Instagram className={styles['svg']} /></a>}
                                            {profile.social.linkedin && <a href={profile.social.linkedin} target="_blank"><Linkedin className={styles['svg']} /></a>}
                                            {profile.social.youtube && <a href={profile.social.youtube} target="_blank"><Youtube className={styles['svg']} /></a>}
                                        </> : null
                                }
                            </div>
                        </div>
                        <div className={styles['bottom-section']}>
                            {
                                profile.bio &&
                                <>
                                    <span className={styles['sub']}>{profile.user.name}'s Bio </span>
                                    <span className={styles['bio']}>{profile.bio}</span>
                                </>
                            }
                            <span className={styles['hr']}></span>
                            <span className={styles['sub']}>Skill Set</span>
                            <span className={styles['skillset']}>
                                {profile.skills && profile.skills.map((skill, idx) => {
                                    return <span className={styles['sk']} key={idx}>
                                        <Point className={styles['svg']} />{skill}
                                    </span>
                                })}
                            </span>
                        </div>
                        <div className={styles['bottom-section']}>
                            {
                                profile.experiences && profile.experiences.length > 0 ?
                                    <>
                                        <span className={styles['sub']}>Experiences</span>
                                        <div className={styles['experiences']}>
                                            {
                                                profile.experiences.map((exp, idx) => {
                                                    return <div className={styles['experience']} key={idx}>
                                                        <span className={styles['name']}>{exp.company}</span>
                                                        <span className={styles['status']}>
                                                            <Moment format='DD/MM/YYYY'>{exp.from}</Moment> - {exp.to ? <Moment format='DD/MM/YYYY'>{exp.to}</Moment> : 'Present'}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Position : </strong> {exp.title}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Description : </strong> {exp.description}
                                                        </span>
                                                        <span className={styles['hr']}></span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </>
                                    : null
                            }
                        </div>
                        <div className={styles['bottom-section']}>
                            {
                                profile.educations && profile.educations.length > 0 ?
                                    <>
                                        <span className={styles['sub']}>Educations</span>
                                        <div className={styles['experiences']}>
                                            {
                                                profile.educations.map((exp, idx) => {
                                                    return <div className={styles['experience']} key={idx}>
                                                        <span className={styles['name']}>{exp.school}</span>
                                                        <span className={styles['status']}>
                                                            <Moment format='DD/MM/YYYY'>{exp.from}</Moment> - {exp.to ? <Moment format='DD/MM/YYYY'>{exp.to}</Moment> : 'Present'}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Degree : </strong> {exp.degree}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Field Of Study : </strong> {exp.fieldofstudy}
                                                        </span>
                                                        <span className={styles['hr']}></span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </>
                                    : null
                            }
                        </div>
                        <div className={styles['bottom-section']}>
                            {
                                repos && repos.length > 0 ?
                                    <>
                                        <span className={styles['sub']}>Github Repos</span>
                                        <div className={styles['experiences']}>
                                            {
                                                repos.map((exp, idx) => {
                                                    return <div className={styles['experience']} key={idx}>
                                                        <a href={exp.html_url} target="_blank" className={styles['name']}>{exp.name}</a>
                                                        <span className={styles['status']}>
                                                            {exp.description}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Stars : </strong> {exp.stargazers_count}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Watchers : </strong> {exp.watchers_count}
                                                        </span>
                                                        <span className={styles['status']}>
                                                            <strong>Forks : </strong> {exp.forks_count}
                                                        </span>
                                                        <span className={styles['hr']}></span>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    </>
                                    : null
                            }
                        </div>
                    </div>
                    :
                    null
            }
        </div>

    )
}

export default Profile