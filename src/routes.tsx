import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './components/navbar';
import CreateView from './views/CreateView';
import RetrievalView from './views/RetrievalView';

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/create" component={CreateView} />
          <Route exact path="/retrieve" component={RetrievalView} />
          <Route>
            <Redirect to="/create" />
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;