import { Link } from 'react-router-dom'
import styles from './ProfileForms.module.css'

const AddEducation = ({ school, degree, fieldofstudy, from, to, current, description, handleChange, handleSubmit }) => {
    return (
        <div className={styles['container']}>
            <span className={styles['header']}>Add Experience</span>
            <form className={styles['form']} onSubmit={handleSubmit}>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='school'
                        value={school}
                        onChange={handleChange}
                        placeholder='School'
                    />
                    <small className={styles["form-text"]}>
                        which school?
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='degree'
                        value={degree}
                        onChange={handleChange}
                        placeholder='Degree'
                    />
                    <small className={styles["form-text"]}>
                        Degree completed in?
                    </small>
                </div>
                <div className={styles['group']}>
                    <input
                        className={styles['input']}
                        type="text"
                        name='fieldofstudy'
                        value={fieldofstudy}
                        onChange={handleChange}
                        placeholder='Field Of Study'
                    />
                    <small className={styles["form-text"]}>
                        Specialize in?
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
                    <input className={styles['create-btn']} type="submit" value='Add Education' />
                    <Link className={styles['back-btn']} to='/dashboard'>Go Back</Link>
                </div>
            </form>
        </div>
    )
}

export default AddEducation