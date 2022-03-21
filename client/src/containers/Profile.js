import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import ProfileComponent from "../components/Profiles/Profile"
import { getGithubRepos, getProfileById } from "../redux/actions/profile";
import { loadUser } from '../redux/actions/auth';

const Profile = (props) => {
    const { id } = useParams();
    useEffect(() => {
        props.dispatch(loadUser(props.auth.token))
        props.dispatch(getProfileById(id))
        props.dispatch(getGithubRepos(props.profile.githubusername))
    }, [])
    return (
        <ProfileComponent
            repos={props.repos}
            auth={props.auth}
            profile={props.profile}
        />
    )
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer,
        profile: state.profileReducer.profile,
        repos: state.profileReducer.repos
    }
}

export default connect(mapStateToProps)(Profile)