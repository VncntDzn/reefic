import { Grid, makeStyles, Typography, Link } from '@material-ui/core';
import Logo from 'assets/logo.png';

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up('lg')]: {
      padding: '0 8rem',
    },
  },
  titleContainer: {
    fontWeight: 700,
    fontSize: '0.9rem',
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
  },
  imageContainer: {
    height: '3rem',
    width: '3rem',
  },
}));

const Footer = (props) => {
  const styles = useStyles();
  return (
    <Grid className={styles.container} container direction='column'>
      <Grid container direction='row'>
        <Grid
          container
          item
          direction='row'
          alignItems='center'
          lg={10}
          xs={6}
          sm={6}
        >
          <img className={styles.imageContainer} src={Logo} alt='Reef' />
          <Link
            color='secondary'
            className={styles.titleContainer}
            variant='h1'
          >
            REEFiC
            <span style={{ fontSize: '0.9rem' }}>PROTOCOL</span>
          </Link>
        </Grid>
        <Grid
          container
          item
          direction='row'
          alignItems='center'
          justify='space-around'
          lg={2}
          sm={6}
          xs={6}
        >
          <Link className={styles.titleContainer} variant='h1'>
            PRIVACY POLICY
          </Link>
          <Link className={styles.titleContainer} variant='h1'>
            FAQ
          </Link>
          <Link className={styles.titleContainer} variant='h1'>
            CONTACT
          </Link>
        </Grid>
      </Grid>
      <hr style={{ width: '100%' }} />
      <Grid container item justify='center'>
        <Typography variant='caption' style={{ color: 'gray' }}>
          © 2018 REEFIC PTE LTD. ALL RIGHTS RESERVED
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
