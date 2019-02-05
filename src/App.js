import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { hot } from 'react-hot-loader/root'
import indexRoutes from './routes'

const App = ({location}) => (
			<Switch>
			    {
			    	indexRoutes.map((prop,key)=>{
			    		return <Route path={prop.path} component={prop.component} key={key} />;
			    	})
			    }
			</Switch>

);


export default hot(App)

