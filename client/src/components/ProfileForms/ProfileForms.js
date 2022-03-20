import { Link } from 'react-router-dom'
import styles from './ProfileForms.module.css'

const ProfileForms = ({ company, website, location, status, skills, githubusername,
    bio, twitter, facebook, linkedin, youtube, instagram, handleChange, handleSubmit, showSocialMedia, toggleSocialMedia }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Create Your Profile</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['group']}>
                    <select className={styles['input']} name="status" value={status} onChange={handleChange}>
                        <option>* Select Professional Status</option>
                        <option value="Developer">Developer</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className={styles["form-text"]}>
                        Give us an idea of where you are at in your career
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='company'
                        value={company}
                        onChange={handleChange}
                        placeholder='Company'
                    />
                    <small className={styles["form-text"]}>
                        Could be your own company or one you work for
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='website'
                        value={website}
                        onChange={handleChange}
                        placeholder='Website'
                    />
                    <small className={styles["form-text"]}>
                        Could be your own or a company website
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='location'
                        value={location}
                        onChange={handleChange}
                        placeholder='Location'
                    />
                    <small className={styles["form-text"]}>
                        City & state suggested (eg. Guwahati, Assam)
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='skills'
                        value={skills}
                        onChange={handleChange}
                        placeholder='Skills'
                    />
                    <small className={styles["form-text"]}>
                        Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='githubusername'
                        value={githubusername}
                        onChange={handleChange}
                        placeholder='Github Username'
                    />
                    <small className={styles["form-text"]}>
                        If you want your latest repos and a Github link, include your
                        username
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='bio'
                        value={bio}
                        onChange={handleChange}
                        placeholder='Bio'
                    />
                    <small className={styles["form-text"]}>Tell us a little about yourself</small>
                </div>

                <div className={styles['group']}>
                    <button className={styles['toggle-social']} onClick={() => toggleSocialMedia()}>
                        {showSocialMedia ? 'Hide' : 'Add'} Social Media Links (Optional)
                    </button>
                    {
                        showSocialMedia ?
                            <>
                                <input
                                    className={styles['input']}
                                    type="text"
                                    name='twitter'
                                    value={twitter}
                                    onChange={handleChange}
                                    placeholder='twitter'
                                />
                                <input
                                    className={styles['input']}
                                    type="text"
                                    name='facebook'
                                    value={facebook}
                                    onChange={handleChange}
                                    placeholder='facebook'
                                />
                                <input
                                    className={styles['input']}
                                    type="text"
                                    name='linkedin'
                                    value={linkedin}
                                    onChange={handleChange}
                                    placeholder='linkedin'
                                />
                                <input
                                    className={styles['input']}
                                    type="text"
                                    name='youtube'
                                    value={youtube}
                                    onChange={handleChange}
                                    placeholder='youtube'
                                />
                                <input
                                    className={styles['input']}
                                    type="text"
                                    name='instagram'
                                    value={instagram}
                                    onChange={handleChange}
                                    placeholder='instagram'
                                />
                            </>
                            :
                            <></>
                    }
                </div>
                <div className={styles['btns']}>
                    <input className={styles['create-btn']} type="submit" value='Create Profile' />
                    <Link className={styles['back-btn']} to='/dashboard'>Go Back</Link>
                </div>
            </form>
        </div>
    )
}

export default ProfileForms