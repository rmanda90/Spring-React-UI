import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";
import Students from '../students/Students';
import StudentsForm from '../students/StudentsForm';
import Home from '../Home/Home';

const AppMenu = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/'} className="nav-link"> Home </Link></li>
          <li><Link to={'/students'} className="nav-link">Studnets</Link></li>
          <li><Link to={'/courses'} className="nav-link">Courses</Link></li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Redirect to='/home' />}
        />
        <Route path='/home' component={Home} />
        <Route path='/students' component={Students} />
        <Route path='/courses' component={StudentsForm} />
      </Switch>
    </Router>
  )
}

export default AppMenu;
