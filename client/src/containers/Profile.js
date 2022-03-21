import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom"
import ProfileComponent from "../components/Profiles/Profile"
import { getGithubRepos, getProfileById } from "../redux/actions/profile";

const Profile = (props) => {
    const { state } = useLocation();
    const { profile } = state;
    useEffect(() => {
        props.dispatch(getProfileById(profile.user._id))
        props.dispatch(getGithubRepos(profile.githubusername))
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