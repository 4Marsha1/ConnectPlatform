import { useEffect } from 'react';
import { useState } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddExperience from '../components/ProfileForms/AddExperience'
import { setAlert } from '../redux/actions/alerts';
import { addExperience } from '../redux/actions/profile';

const Experience = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (props.profile.addedExperience) {
            props.dispatch(setAlert('Experience added successfully', "SUCCESS", 4000));
            navigate('/dashboard')
        } else if (props.profile.addedExperience === false) {
            props.dispatch(setAlert('Experience addtion failed', "FAILED", 4000))
        }
    }, [props.profile.addedExperience])

    const [newExperience, setNewExperience] = useState({
        company: "",
        title: "",
        location: "",
        from: "",
        to: "",
        current: false,
        description: ""
    })
    const { title, company, location, from, to, current, description } = newExperience;
    const handleChange = (e) => {
        if (e.target.name === 'current') {
            setNewExperience({ ...newExperience, ['current']: e.targetchecked })
        } else {
            const { name, value } = e.target;
            setNewExperience({ ...newExperience, [name]: value })
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (!title || !company || !location || !to || !from) {
            props.dispatch(setAlert('Incomplete Fields', 'FAILED', 4000))
        }
        else {
            await props.dispatch(addExperience(title, company, location, from, to, current, description, props.auth.token))
        }
    }
    return (
        <>
            <AddExperience
                title={title}
                company={company}
                location={location}
                from={from}
                to={to}
                current={current}
                description={description}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
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

export default connect(mapStateToProps)(Experience)