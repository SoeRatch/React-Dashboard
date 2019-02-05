import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from '../../assets/jss/layouts/dashboardStyle.js';

class Dashboard extends React.Component{
	state={
		mobileOpen:false
	}

	render(){
		const {classes,...rest}=this.props;
		return(
			<div className={classes.wrapper}>
				
			</div>);
	}
}

Dashboard.propTypes = {
	classes:PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname:PropTypes.string.isRequired
    }).isRequired
};

export default withStyles(dashboardStyle)(Dashboard);