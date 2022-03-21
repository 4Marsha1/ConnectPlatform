import { useState } from 'react'
import { connect } from 'react-redux';
import CreateProfileComponent from '../components/ProfileForms/ProfileForms'
import { setAlert } from '../redux/actions/alerts';
import { createProfile, loadProfile } from '../redux/actions/profile';
import { useEffect } from 'react';

const EditProfile = (props) => {
    const [showSocialMedia, setShowSocialMedia] = useState(false);
    useEffect(() => {
        props.dispatch(loadProfile(props.auth.token))
        if (props.profile.created) {
            props.dispatch(setAlert('Profile updated successfully', "SUCCESS", 4000));
        } else if (props.profile.created === false) {
            props.dispatch(setAlert('Profile updation failed', "FAILED", 4000))
        }
    }, [props.profile.created])

    const [profileData, setProfileData] = useState({
        company: props.profile.loading || !props.profile.profile.company ? '' : props.profile.profile.company,
        website: props.profile.loading || !props.profile.profile.website ? '' : props.profile.profile.website,
        location: props.profile.loading || !props.profile.profile.location ? '' : props.profile.profile.location,
        status: props.profile.loading || !props.profile.profile.status ? '' : props.profile.profile.status,
        skills: props.profile.loading || !props.profile.profile.skills ? '' : props.profile.profile.skills.join(','),
        githubusername: props.profile.loading || !props.profile.profile.githubusername ? '' : props.profile.profile.githubusername,
        bio: props.profile.loading || !props.profile.profile.bio ? '' : props.profile.profile.bio,
        twitter: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.twitter,
        facebook: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.facebook,
        linkedin: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.linkedin,
        youtube: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.youtube,
        instagram: props.profile.loading || !props.profile.profile.social ? '' : props.profile.profile.social.instagram
    })
    const { company, website, location, status, skills, githubusername,
        bio, twitter, facebook, linkedin, youtube, instagram } = profileData;

    const toggleSocialMedia = () => {
        setShowSocialMedia(!showSocialMedia)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!status || !skills) {
            props.dispatch(setAlert('Status & Skills are compulsory', "FAILED", 4000))
        } else {
            await props.dispatch(createProfile(company, website, location, status, skills, githubusername,
                bio, twitter, facebook, linkedin, youtube, instagram, props.auth.token));
        }
    }

    return (
        <>
            <CreateProfileComponent
                company={company}
                website={website}
                location={location}
                status={status}
                skills={skills}
                githubusername={githubusername}
                bio={bio}
                twitter={twitter}
                facebook={facebook}
                youtube={youtube}
                linkedin={linkedin}
                instagram={instagram}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                showSocialMedia={showSocialMedia}
                toggleSocialMedia={toggleSocialMedia}
                type='edit'
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

export default connect(mapStateToProps)(EditProfile)