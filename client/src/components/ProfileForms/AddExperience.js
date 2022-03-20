import { Link } from 'react-router-dom'
import styles from './ProfileForms.module.css'

const AddExperience = ({ title, company, location, from, to, current, description, handleChange, handleSubmit }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Add Experience</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='title'
                        value={title}
                        onChange={handleChange}
                        placeholder='Title'
                    />
                    <small className={styles["form-text"]}>
                        what role were you working as?
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
                        type="date"
                        name='from'
                        value={from}
                        onChange={handleChange}
                        placeholder='From'
                    />
                    <small className={styles["form-text"]}>
                        when did you start working here
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="date"
                        name='to'
                        value={to}
                        onChange={handleChange}
                        placeholder='To'
                    />
                    <small className={styles["form-text"]}>
                        When did you stop working here
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="checkbox"
                        name='current'
                        value={current}
                        onChange={handleChange}
                        placeholder='Current'
                    />
                    <small className={styles["form-text"]}>Is this your current job?</small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='description'
                        value={description}
                        onChange={handleChange}
                        placeholder='description'
                    />
                    <small className={styles["form-text"]}>
                        A short description about your job
                    </small>
                </div>
                <div className={styles['btns']}>
                    <input className={styles['create-btn']} type="submit" value='Add Experience' />
                    <Link className={styles['back-btn']} to='/dashboard'>Go Back</Link>
                </div>
            </form>
        </div>
    )
}

export default AddExperience