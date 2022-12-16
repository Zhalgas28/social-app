import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth 
	}
}

export function withRedirect(Component) {
	function funcWithRedirect(props) {
		if (props.isAuth) {
			return <Component {...props} /> 
		}
		return <Navigate to={"/login"} />
	}

	return connect(mapStateToProps)(funcWithRedirect)
}