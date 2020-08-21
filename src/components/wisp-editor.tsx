import React, { ChangeEvent } from 'react';
import { makeStyles, Paper, Typography, TextField, Button } from '@material-ui/core';
import { Lock } from '@material-ui/icons'

import { WispEditorState } from '../models/state';
import { WispEditorProps } from '../models/props';
import { WispApi } from '../services/wisp-api';
import WispConfirmCreateDialog from './wisp-confirm-create-dialog';

class WispEditor extends React.Component<WispEditorProps, WispEditorState> {
  _wispApi: WispApi

  constructor(props: WispEditorProps) {
    super(props);
    this.state = {wispContents: '', wispPassword: '', isConfirmDialogOpen: false, isCurrentlyLoading: false, encryptedWispId: ''}
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
        <Button onClick={this.onEncrypt} variant="contained" color="primary" startIcon={<Lock />} disabled={this.props.isLoading}>Encrypt</Button>
        <WispConfirmCreateDialog
          open={this.state.isConfirmDialogOpen}
          setOpen={this.setConfirmDialogOpenState}
          onClose={this.onConfirmDialogClosed}
          wispId={this.state.encryptedWispId}
        />
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
        wispContents: id === 'wisp-contents' ? value : state.wispContents,
        wispPassword: id === 'wisp-password' ? value : state.wispPassword,
      }
    });
  }

  setConfirmDialogOpenState = (dialogOpenState: boolean) => {
    this.setState(state => {
      return {...state, isConfirmDialogOpen: dialogOpenState}
    })
  }

  onEncrypt = async () => {
    this.props.isCurrentlyLoading(true);
    try {
      const id = await this._wispApi.encryptText(this.state.wispPassword, this.state.wispContents)
      this.setState(state => {
        return {...state, encryptedWispId: id}
      })
      this.setConfirmDialogOpenState(true);
    } catch(e) {
      console.log('An error occured trying to encrypt the data!');
      this.props.isCurrentlyLoading(false);
    }
  }

  onConfirmDialogClosed = () => {
    this.props.isCurrentlyLoading(false);
  }
}

export default WispEditor;