import { connect } from 'react-redux';
import styles from './Alert.module.css';

const Alert = (props) => {
    return (
        <div className={styles['container']}>
            {
                props.alerts.map(alert => {
                    return <span className={`${styles['alert']} ${styles[alert.type]}`}>{alert.msg}</span>
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        alerts: state.alertReducer
    }
}

export default connect(mapStateToProps)(Alert);