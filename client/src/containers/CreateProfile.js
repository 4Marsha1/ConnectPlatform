import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import CreateProfileComponent from '../components/ProfileForms/ProfileForms'
import { setAlert } from '../redux/actions/alerts';
import { createProfile } from '../redux/actions/profile';
import { useEffect } from 'react';

const CreateProfile = (props) => {
    const navigate = useNavigate();
    const [showSocialMedia, setShowSocialMedia] = useState(false);

    useEffect(() => {
        if (props.profile.created) {
            props.dispatch(setAlert('Profile created successfully', "SUCCESS", 4000));
            navigate('/dashboard')
        } else if (props.profile.created === false) {
            props.dispatch(setAlert('Profile creation failed', "FAILED", 4000))
        }
    }, [props.profile.created])

    const [profileData, setProfileData] = useState({
        company: "",
        website: "",
        location: "",
        status: "",
        skills: "",
        githubusername: "",
        bio: "",
        twitter: "",
        facebook: "",
        linkedin: "",
        youtube: "",
        instagram: ""
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
                type='create'
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

export default connect(mapStateToProps)(CreateProfile)