import React from 'react';
import PropTypes from "prop-types";

class Dashboard extends React.Component{

	render(){
		return(
			<div>
					<p>Hello Dashboard</p>
			</div>);
	}
}

Dashboard.propTypes = {
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    }).isRequired
};

export default Dashboard;