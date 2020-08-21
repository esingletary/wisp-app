import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Footer extends React.Component {
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'© '}
        {new Date().getFullYear()}
        {' '}
        <Link color="inherit" href="http://manny.co/">
          Emmanuel Singletary
      </Link>
      </Typography>
    )
  }
}
export default Footer;