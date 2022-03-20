import styles from './Dashboard.module.css'
import Moment from 'react-moment'

const Experiences = ({ loaded, experiences }) => {
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
                        loaded === true ? experiences.map((exp, idx) => {
                            return <tr key={idx}>
                                <td>{exp.company}</td>
                                <td>{exp.title}</td>
                                <td>{exp.location}</td>
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

export default Experiences