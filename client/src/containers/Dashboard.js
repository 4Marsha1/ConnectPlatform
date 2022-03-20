import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'
import Educations from '../components/Dashboard/Educations'
import Experiences from '../components/Dashboard/Experiences'
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
        <>
            <DashboardComponent
                user={props.auth.user}
                profile={props.profile.profile}
            />
            <Experiences
                loaded={props.profile.loaded}
                experiences={props.profile.profile.experiences}
            />
            <Educations
                loaded={props.profile.loaded}
                educations={props.profile.profile.educations}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        profile: state.profileReducer
    }
}

export default connect(mapStateToProps)(Dashboard)