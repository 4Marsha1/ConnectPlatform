import { connect } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({ auth }) => {
    if (auth.token) {
        return <Outlet />
    } else {
        return <Navigate to='/' />
    }
}

const mapStateToProps = state => {
    return {
        auth: state.authReducer
    }
}

export default connect(mapStateToProps)(PrivateRoute)