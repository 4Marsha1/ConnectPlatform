import styles from './Dashboard.module.css'
import Moment from 'react-moment'

const Experiences = ({ loaded, experiences, handleDeleteExperience }) => {
    if (loaded && experiences.length > 0) {
        return (
            <div className={styles['parent']}>
                <span className={styles['title']}>Experiences</span>
                <table className={styles['table']}>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Years</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            experiences.map((exp, idx) => {
                                return <tr key={idx}>
                                    <td>{exp.company}</td>
                                    <td>{exp.title}</td>
                                    <td>{exp.location}</td>
                                    <td>
                                        <Moment format='DD/MM/YYYY'>{exp.from}</Moment> - {exp.to === null ? 'Present' : <Moment format='DD/MM/YYYY'>{exp.to}</Moment>}
                                    </td>
                                    <td>
                                        <button className={styles['del']}
                                            onClick={() => handleDeleteExperience(exp._id)} >Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    } else {
        return null;
    }
}

export default Experiences