import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button'

import { WispApi } from '../services/wisp-api';

class WispEditor extends React.Component<{}, { wispContents: string, wispPassword: string }> {
  _wispApi: WispApi

  constructor(props: {}) {
    super(props);
    this.state = {wispContents: '', wispPassword: ''}
    this._wispApi = new WispApi();
  }

  useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    wispContents: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
    wispPassword: {
      marginBottom: theme.spacing(3),
    }
  }));

  component = () => {
    const classes = this.useStyles();
    return (
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          This box is for your deepest, darkest secrets
        </Typography>
        <TextField id="wisp-contents" className={classes.wispContents} multiline fullWidth rows={4} variant="outlined" onChange={this.onInputChange} />
        <Typography component="p" align="center">
          You should probably type a password so no one reads it by accident
        </Typography>
        <TextField id="wisp-password" className={classes.wispPassword} fullWidth type="password" label="Password" onChange={this.onInputChange} />
        <Button onClick={this.onEncrypt} variant="contained" color="primary" startIcon={<LockIcon />}>Encrypt</Button>
      </Paper>
    )
  }

  render() {
    return <this.component />
  }

  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {id, value} = event.target;
    this.setState((state) => {
      return {
        wispContents: id === 'wisp-contents' ? value : state.wispContents,
        wispPassword: id === 'wisp-password' ? value : state.wispPassword,
      }
    });
  }

  onEncrypt = () => {
    this._wispApi.encryptText(this.state.wispPassword, this.state.wispContents)
  }
}

export default WispEditor;