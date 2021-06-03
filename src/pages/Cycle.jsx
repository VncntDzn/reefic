import React from 'react';
import PropTypes from 'prop-types';
import Benefits from 'assets/cycle/benefits.png';

import {
  Grid,
  makeStyles,
  Box,
  Button,
  Typography,
  Hidden,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    height: '10rem',
    [theme.breakpoints.up('md')]: {
      height: '15rem',
    },
  },
  titleContainer: {
    fontSize: '1.2rem',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  contentContainer: {
    [theme.breakpoints.up('md')]: {
      border: '3px solid green',
      padding: ' 0 10rem',
    },
  },
}));
const Cycle = (props) => {
  const styles = useStyles();
  return (
    <Grid container item direction='row' style={{ border: '3px solid red' }}>
      <Grid item lg={6} md={5} sm={6} style={{ border: '3px solid red' }}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          className={styles.contentContainer}
        >
          <Typography color='primary' className={styles.titleContainer}>
            CREATING A SECURE AND INTERLINKED ECO-SYSTEM FOR CUSTOMER LOYALTY
            AND ENGAGEMENT
          </Typography>
          <Typography style={{ padding: '0 5rem', textAlign: 'center' }}>
            Reefic Protocol is an integrated exchange habitat that links
            customers, merchants and solution providers together.
          </Typography>
          <Button variant='contained' color='primary'>
            REGISTER NOW
          </Button>
        </Box>
      </Grid>
      <Grid
        lg={6}
        sm={6}
        md={7}
        container
        item
        justify='center'
        alignItems='center'
        style={{ border: '3px solid red', position: 'relative' }}
      >
        <Hidden lgUp>
          <ul>
            <li>
              <Typography>Enables Reward Points to be easily Traded</Typography>
            </li>
            <li>
              <Typography>Builds Resilience for Service Providers</Typography>
            </li>
            <li>
              <Typography>Promotes Data Driver Smart Businesses</Typography>
            </li>
            <li>
              <Typography>Uses a Proprietary Blockchain Protocol</Typography>
            </li>
            <li>
              <Typography>Supports Virtual Gaming Engagement</Typography>
            </li>
            <li>
              <Typography>Sustains a Community Environment</Typography>
            </li>
          </ul>
        </Hidden>
        <Hidden mdDown>
          <Box>
            <Box
              display='flex'
              justifyContent='space-between'
              style={{
                position: 'absolute',
                width: '40rem',
                left: '8%',
                right: '50%',
                top: '5%',
              }}
            >
              <Typography>Enables Reward Points to be easily Traded</Typography>
              <Typography>Builds Resilience for Service Providers</Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              style={{
                position: 'absolute',
                width: '40vw',
                left: '10%',
                right: '50%',
                bottom: '25%',
              }}
            >
              <Typography>Promotes Data Driver Smart Businesses</Typography>
              <Typography>Uses a Proprietary Blockchain Protocol</Typography>
            </Box>

            <Box
              display='flex'
              justifyContent='space-between'
              style={{
                position: 'absolute',
                width: '40vw',
                left: '10%',
                right: '20%',
                bottom: ' 5%',
              }}
            >
              <Typography>Supports Virtual Gaming Engagement</Typography>
              <Typography>Sustains a Community Environment</Typography>
            </Box>
          </Box>
        </Hidden>
        <img className={styles.imageContainer} src={Benefits} alt='Benefits' />
      </Grid>
    </Grid>
  );
};

Cycle.propTypes = {};

export default Cycle;
