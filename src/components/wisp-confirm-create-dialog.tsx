import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import React from 'react';

import { WispConfirmCreateDialogProps } from '../models/props';

class WispConfirmCreateDialog extends React.Component<WispConfirmCreateDialogProps> {

  handleClose = () => {
    this.props.setOpen(false);
    this.props.onClose();
  };

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={() => this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Now the spies can't get you!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Wisp has been successfully encrypted! Access it in the future using this ID: {this.props.wispId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" autoFocus>
            Sounds good
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
export default WispConfirmCreateDialog;