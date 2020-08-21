import React, { ChangeEvent } from 'react';
import { makeStyles, Paper, Typography, TextField, Button } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';

import { WispApi } from '../services/wisp-api';
import { WispRetrieverProps } from '../models/props';
import { WispRetrieverState } from '../models/state';

class WispRetriever extends React.Component<WispRetrieverProps, WispRetrieverState> {
  _wispApi: WispApi

  constructor(props: WispRetrieverProps) {
    super(props);
    this.state = {isCurrentlyLoading: false, wispContents: '', wispId: '', wispPassword: ''}
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
      marginTop: theme.spacing(5),
    },
    wispId: {
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
        Someone shared some secrets with you
      </Typography>
      <TextField id="wisp-id" className={classes.wispId} fullWidth label="ID" onChange={this.onInputChange} />
      <TextField id="wisp-password" className={classes.wispPassword} fullWidth type="password" label="Password" onChange={this.onInputChange} />
      <Button onClick={this.onDecrypt} variant="contained" color="primary" startIcon={<LockOpen />} disabled={this.props.isLoading}>Decrypt</Button>
      {this.state.wispContents !== '' &&
      <TextField id="wisp-contents" className={classes.wispContents} multiline fullWidth rows={4} variant="outlined" onChange={this.onInputChange} value={this.state.wispContents} />
      }
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
        ...state,
        wispId: id === 'wisp-id' ? value : state.wispId,
        wispPassword: id === 'wisp-password' ? value : state.wispPassword
      }
    });
  }

  onDecrypt = async () => {
    this.props.isCurrentlyLoading(true);
    try {
      const text = await this._wispApi.decryptText(this.state.wispId, this.state.wispPassword);
      this.setState(state => {
        return {
          ...state,
          wispContents: text,
        }
      });
      this.props.isCurrentlyLoading(false);
    } catch (e) {
      this.props.isCurrentlyLoading(false);
      console.log('An error occured decrypting the wisp')
    }
  }
}

export default WispRetriever;