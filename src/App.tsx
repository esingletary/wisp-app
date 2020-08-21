import React from 'react';
import { makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/navbar';
import Footer from './components/footer';
import WispEditor from './components/wisp-editor';

const useStyles = makeStyles((theme) => ({
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

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <main className={classes.layout}>
        <WispEditor />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
