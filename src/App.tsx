import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

import Footer from './components/footer';
import Routes from './routes';

class App extends React.Component<{}, { isLoading: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = { isLoading: false }
  }

  component = () => {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
        <Footer />
      </React.Fragment>
    );
  }

  handleLoadingChange = (isLoading: boolean) => {
    this.setState(state => { return { isLoading }});
  }

  render() {
    return <this.component />
  }
}

export default App;
