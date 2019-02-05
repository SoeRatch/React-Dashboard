import React from 'react';
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { NavLink } from "react-router-dom";
// @material-ui/core components
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";


import sidebarStyle from "../../assets/jss/components/sidebarStyle";

const Sidebar =({...props})=>{

		const { classes, color, logo, image, logoText, routes} = props;

		var brand = (
				    <div className={classes.logo}>
				        <div className={classes.logoImage}>
				          <img src={logo} alt="logo" className={classes.img} />
				        </div>
				        {logoText}
				    </div>
				  );

		var links = (
		    <List className={classes.list}>
		      {routes.map((prop, key) => {
		        if (prop.redirect) return null;
		        return (
		          <NavLink
		            to={prop.path}
		            activeClassName="active"
		            key={key}
		          >
		            <ListItem button>
		              <ListItemIcon>
		                {typeof prop.icon === "string" ? (
		                  <Icon>{prop.icon}</Icon>
		                ) : (
		                  <prop.icon />
		                )}
		              </ListItemIcon>
		              <ListItemText
		                primary={prop.sidebarName}
		                disableTypography={true}
		              />
		            </ListItem>
		          </NavLink>
		        );
		      })}
		    </List>
		  );

		return(
			<Hidden smDown implementation="css">
				<Drawer
					anchor="left"
					variant="permanent"
					open
					classes={{
						paper:classes.drawerPaper
					}}
				>
					{brand}
					<div className={classes.sidebarWrapper}>{links}</div>
					{image !== undefined ? (
			            <div
			              className={classes.background}
			              style={{ backgroundImage: "url(" + image + ")" }}
			            />
		          ) : null}
				</Drawer>
			</Hidden>
		);
}

Sidebar.propTypes={
	classes:PropTypes.object.isRequired,

};

export default withStyles(sidebarStyle)(Sidebar);