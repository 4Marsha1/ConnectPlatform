import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'
import { loadUser } from '../redux/actions/auth'
import { loadProfile } from '../redux/actions/profile'

const Dashboard = (props) => {
    useEffect(() => {
        const cb = async () => {
            props.dispatch(loadUser(props.auth.token))
            props.dispatch(loadProfile(props.auth.token))
        }
        cb();
    }, [])
    return (
        <DashboardComponent
            user={props.auth.user}
            profile={props.profile.profile}
        />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        profile: state.profileReducer
    }
}

export default connect(mapStateToProps)(Dashboard)