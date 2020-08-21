import React from 'react';
import { makeStyles, createStyles, Theme, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
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
            Secret Manager
        </Typography>
        <Button color="inherit" component={Link} to="/create">Create</Button>
        <Button color="inherit" component={Link} to="/retrieve">Retrieve</Button>
        </Toolbar>
      </AppBar>
    )
  }


  render() {
    return <this.component />
  }
}
export default NavBar;