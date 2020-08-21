import { CssBaseline, makeStyles, LinearProgress } from '@material-ui/core';
import React from 'react';

import NavBar from './components/navbar';
import Footer from './components/footer';
import WispEditor from './components/wisp-editor';

class App extends React.Component<{}, { isLoading: boolean }> {
  constructor(props: {}) {
    super(props)
    this.state = { isLoading: false }
  }
  useStyles = makeStyles((theme) => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }));

  component = () => {
    const classes = this.useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
        <NavBar />
        {this.state.isLoading && <LinearProgress /> }
        <main className={classes.layout}>
          <WispEditor isLoading={this.state.isLoading} isCurrentlyLoading={this.handleLoadingChange} />
        </main>
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
