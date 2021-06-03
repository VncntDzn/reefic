import { makeStyles, Box, Button, Typography } from '@material-ui/core';
import Teamwork from 'assets/protocol-updates/teamwork.jpeg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      margin: '0 10rem',
    },
  },
  titleContainer: {
    fontSize: 'clamp(1.4rem, 5vw, 2.5rem)',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  subtitleContainer: {
    fontSize: 'clamp(0.9rem, 4vw, 1.6rem)',
    fontWeight: 700,
    fontFamily: 'Montserrat',
    textAlign: 'center',
  },
  imageContainer: {
    height: '10rem',
    width: 'auto',
    objectFit: 'cover',
    [theme.breakpoints.up('sm')]: {
      height: '13rem',
    },
  },
  bookmarkedContainer: {
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: '3%',
    right: 5,
    color: 'white',
    fontFamily: 'Montserrat',
    padding: '0.8rem',
    fontWeight: 700,
    [theme.breakpoints.up('sm')]: {
      right: 0,
    },
    [theme.breakpoints.up('md')]: {
      right: '5%',
    },
    [theme.breakpoints.up('lg')]: {
      right: 4,
    },
  },
  protocolContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
    width: '100vw',
    marginTop: '5%',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-around',
    },
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'space-around',
      width: '85vw',
    },
  },
  detailsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 5,
    width: '16rem',
    [theme.breakpoints.up('sm')]: {
      width: '20rem',
    },
    [theme.breakpoints.up('md')]: {
      width: '35vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '17vw',
    },
  },
}));

const ProtocolUpdates = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container} marginTop={5}>
      <Typography
        variant='h1'
        className={styles.titleContainer}
        color='primary'
      >
        REEFIC PROTOCOL UPDATES
      </Typography>
      <Typography className={styles.subtitleContainer} color='primary'>
        Stay up-to-date with the current news
      </Typography>

      <Box className={styles.protocolContainer}>
        {[1, 2, 3, 4].map((i) => (
          <Box className={styles.detailsContainer} key={i}>
            <img
              className={styles.imageContainer}
              src={Teamwork}
              alt='Teamwork'
            />
            <Typography className={styles.bookmarkedContainer}>21/6</Typography>
            <Box
              display='flex'
              justifyContent='flex-start'
              flexDirection='column'
            >
              <Typography
                variant='h1'
                style={{ fontWeight: 700, fontSize: '1rem' }}
              >
                GILLGOLD REEFIC TO DO A SOFT LAUNCH IN TOKYO, JAPAN
              </Typography>
              <Typography
                variant='h1'
                style={{ fontWeight: 500, fontSize: '0.8rem', color: 'gray' }}
              >
                READ MORE [+]
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Button variant='contained' color='primary'>
        MORE EVENTS
      </Button>
    </Box>
  );
};

export default ProtocolUpdates;
