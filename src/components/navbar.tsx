import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends React.Component {
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }),
  );

  component = () => {
    const classes = this.useStyles();
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Wisp Secret Manager
        </Typography>
        </Toolbar>
      </AppBar>
    )
  }


  render() {
    return <this.component />
  }
}
export default NavBar;