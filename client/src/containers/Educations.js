import { useEffect } from 'react';
import { useState } from 'react'
import { connect } from 'react-redux';
import AddEducation from '../components/ProfileForms/AddEducations';
import { setAlert } from '../redux/actions/alerts';
import { addEducation } from '../redux/actions/profile';

const Education = (props) => {

    useEffect(() => {
        if (props.profile.addedEducation) {
            props.dispatch(setAlert('Education added successfully', "SUCCESS", 4000));
        } else if (props.profile.addedEducation === false) {
            props.dispatch(setAlert('Education addtion failed', "FAILED", 4000))
        }
    }, [props.profile.addedEducation])

    const [newEducation, setNewEducation] = useState({
        school: "",
        degree: "",
        fieldofstudy: "",
        from: "",
        to: "",
        current: false,
        description: ""
    })
    const { school, degree, fieldofstudy, from, to, current, description } = newEducation;
    const handleChange = (e) => {
        if (e.target.name === 'current') {
            setNewEducation({ ...newEducation, ['current']: e.targetchecked })
        } else {
            const { name, value } = e.target;
            setNewEducation({ ...newEducation, [name]: value })
        }
    }
    const handleSubmit = async e => {
        e.preventDefault();
        if (!school || !degree || !fieldofstudy || !to || !from) {
            props.dispatch(setAlert('Incomplete Fields', 'FAILED', 4000))
        }
        else {
            await props.dispatch(addEducation(school, degree, fieldofstudy, from, to, current, description, props.auth.token))
        }
    }
    return (
        <>
            <AddEducation
                school={school}
                degree={degree}
                fieldofstudy={fieldofstudy}
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

export default connect(mapStateToProps)(Education)