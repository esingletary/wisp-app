import React from 'react';
import { makeStyles, LinearProgress } from '@material-ui/core';

import WispEditor from '../components/wisp-editor';

class CreateView extends React.Component<{}, { isLoading: boolean }> {
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
        {this.state.isLoading && <LinearProgress /> }
        <main className={classes.layout}>
          <WispEditor isLoading={this.state.isLoading} isCurrentlyLoading={this.handleLoadingChange} />
        </main>
      </React.Fragment>
    );
  }
  render() {
    return <this.component />
  }

  handleLoadingChange = (isLoading: boolean) => {
    this.setState(state => { return { isLoading }});
  }
}

export default CreateView;