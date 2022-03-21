import { useEffect } from 'react';
import { connect } from 'react-redux';
import ProfilesComponent from '../components/Profiles';
import { getAllProfiles } from '../redux/actions/profile';

const Profiles = (props) => {
    useEffect(() => {
        props.dispatch(getAllProfiles());
    }, [])
    return (
        <ProfilesComponent
            profiles={props.profiles}
        />
    )
}

const mapStateToProps = state => {
    return {
        profiles: state.profileReducer.profiles
    }
}

export default connect(mapStateToProps)(Profiles)