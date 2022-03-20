import { useState } from 'react'
import { connect } from 'react-redux';
import Alert from '../components/Alert';
import CreateProfileComponent from '../components/ProfileForms/CreateProfile'
import { setAlert } from '../redux/actions/alerts';

const CreateProfile = (props) => {
    const [showSocialMedia, setShowSocialMedia] = useState(false);
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
            props.dispatch(setAlert('Status & Skills are compulsory', "FAILED"))
        } else {
            console.log(profileData);
        }
    }

    return (
        <>
            <Alert />
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
            />
        </>
    )
}

export default connect()(CreateProfile)