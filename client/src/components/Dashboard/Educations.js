import styles from './Dashboard.module.css'
import Moment from 'react-moment'

const Educations = ({ loaded, educations }) => {
    return (
        <div className={styles['parent']}>
            <span className={styles['title']}>Educations</span>
            <table className={styles['table']}>
                <thead>
                    <tr>
                        <th>School</th>
                        <th>Degree</th>
                        <th>Field Of Study</th>
                        <th>Years</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loaded === true ? educations.map((exp, idx) => {
                            return <tr key={idx}>
                                <td>{exp.school}</td>
                                <td>{exp.degree}</td>
                                <td>{exp.fieldofstudy}</td>
                                <td>
                                    <Moment format='DD/MM/YYYY'>{exp.from}</Moment> - {exp.to === null ? 'Present' : <Moment format='DD/MM/YYYY'>{exp.to}</Moment>}
                                </td>
                                <td>
                                    <button className={styles['del']} >Delete</button>
                                </td>
                            </tr>
                        }) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Educations