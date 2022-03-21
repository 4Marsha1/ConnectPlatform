import React from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'
import Educations from '../components/Dashboard/Educations'
import Experiences from '../components/Dashboard/Experiences'
import { loadUser } from '../redux/actions/auth'
import { deleteAccount, deleteEducation, deleteExperience, loadProfile } from '../redux/actions/profile'

const Dashboard = (props) => {
    useEffect(() => {
        const cb = async () => {
            props.dispatch(loadUser(props.auth.token))
            props.dispatch(loadProfile(props.auth.token))
        }
        cb();
    }, [props.profile.deletedEducation, props.profile.deletedExperience, props.profile.deletedAccount])

    const handleDeleteEducation = async (id) => {
        await props.dispatch(deleteEducation(id, props.auth.token))
    }
    const handleDeleteExperience = async (id) => {
        await props.dispatch(deleteExperience(id, props.auth.token))
    }
    const handleDeleteAccount = async () => {
        await props.dispatch(deleteAccount(props.auth.token))
    }

    return (
        <>
            <DashboardComponent
                user={props.auth.user}
                profile={props.profile.profile}
                handleDeleteAccount={handleDeleteAccount}
            />
            <Experiences
                loaded={props.profile.loaded}
                experiences={props.profile.profile.experiences}
                handleDeleteExperience={handleDeleteExperience}
            />
            <Educations
                loaded={props.profile.loaded}
                educations={props.profile.profile.educations}
                handleDeleteEducation={handleDeleteEducation}
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