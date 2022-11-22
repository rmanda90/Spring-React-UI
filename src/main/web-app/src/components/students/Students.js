import React from 'react';
import {
    Route, Switch, Redirect
} from "react-router-dom";
import StudentsList from './StudentsList';
import StudentsForm from './StudentsForm';

const Students = ({ match }) => {    
    return (
        <div>
            <Switch>
                <Route exact path={match.path} />
                <Route exact path={`${match.path}/add`} component={StudentsForm} />
                <Route exact path={`${match.path}/edit/:id`} component={StudentsForm} />
                <Redirect to='/home' />
            </Switch>
            <StudentsList />
        </div>
    )
}

export default Students;