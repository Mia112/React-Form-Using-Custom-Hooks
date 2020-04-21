import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';
import MainNav from './shared/components/Navigation/MainNav';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
const App = () => {
	return (
		<Router>
			<MainNav />
			<main>
				<Switch>
					<Route path='/' exact>
						<Users />
					</Route>
					<Route path='/places/new' exact>
						<NewPlace />
					</Route>
					<Redirect to='/' />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
