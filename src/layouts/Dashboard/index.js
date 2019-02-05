import React from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from '../../assets/jss/layouts/dashboardStyle';
import Sidebar from "../../components/Sidebar";
import sidebarimage from "../../assets/img/sidebarimage2.jpg";
import logo from "../../assets/img/reactlogo.png";
import dashboardRoutes from '../../routes/dashboard';

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class Dashboard extends React.Component{
	state={
		mobileOpen:false
	}


	handleDrawerToggle=()=>{
		this.setState({
			mobileOpen:!this.state.mobileOpen
		});
	};

	render(){
		const {classes,...rest}=this.props;
		return(
			<div className={classes.wrapper}>
				<Sidebar
					  routes={dashboardRoutes}
			          logoText={"Dashboard-React"}
			          logo={logo}
			          image={sidebarimage}
			          handleDrawerToggle={this.handleDrawerToggle}
			          open={this.state.mobileOpen}
			          color="blue"
			          {...rest}
				 />
				 <div className={classes.mainPanel} ref="mainPanel">
		              <div className={classes.content}>
		                <div className={classes.container}>{switchRoutes}</div>
		              </div>
        		</div>
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