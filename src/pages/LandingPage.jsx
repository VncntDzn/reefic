import { Typography, Box, makeStyles, Button } from '@material-ui/core';
import { Navbar } from 'layouts';
import Blockchain from 'assets/Blockchain.jpg';
import SocmedIcons from 'components/SocmedIcons';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Blockchain})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: 'auto',
    boxShadow: ' inset 0 0 0 1000px rgba(76, 19, 81,.3)',
    color: theme.palette.secondary.main,
  },

  paragraphContainer: {
    textAlign: 'center',
    color: 'white',
    padding: '0 0.6rem',
    [theme.breakpoints.up('lg')]: {
      width: '45rem',
    },
  },
  countdownNumContainer: {
    fontSize: 'clamp(1.3rem, 5vw, 2.5rem)',
    fontFamily: 'Montserrat',
  },
  countdownContainer: {
    fontSize: 'clamp(0.9rem, 3vw, 1.2rem)',
    fontFamily: 'Montserrat',
  },
  buttonContainer: {
    backgroundColor: '#78b847',
    color: theme.palette.primary.main,
    margin: '0 1rem',
  },
}));

const countdown = [
  {
    num: '28',
    count: 'DAYS',
  },
  {
    num: '17',
    count: 'HOURS',
  },
  {
    num: '48',
    count: 'MINUTES',
  },
  {
    num: '56',
    count: 'SECONDS',
  },
];

const LandingPage = () => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Navbar />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        marginTop={10}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          marginBottom={5}
        >
          <Typography
            variant='h1'
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1.7rem, 5vw, 2.5rem)',
              marginBottom: 10,
            }}
          >
            HAVE A REEFIC DAY!
          </Typography>
          <Typography variant='subtitle1' className={styles.paragraphContainer}>
            Reefic Protocol is a decentralised platform where customers can
            exchange reward points across multiple loyalty programs and selected
            cryptocurrencies.
          </Typography>
        </Box>
        <Box
          marginBottom={10}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Typography
            style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 5vw, 3.2rem)' }}
          >
            OPEN FOR TOKEN SALE IN
          </Typography>
          <Box display='flex' justifyContent='space-around'>
            {countdown.map((data) => (
              <Box
                key={data.num}
                display='flex'
                flexDirection='column'
                justifyContent='space-evenly'
                alignItems='center'
                mx={2}
              >
                <Typography className={styles.countdownNumContainer}>
                  {data.num}
                </Typography>
                <Typography className={styles.countdownContainer}>
                  {data.count}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            display='flex'
            justifyContent='space-evenly'
            width={'20rem'}
            marginTop={3}
          >
            <Button
              fullWidth
              className={styles.buttonContainer}
              variant='contained'
            >
              WHITELIST
            </Button>
            &nbsp;
            <Button
              fullWidth
              className={styles.buttonContainer}
              variant='contained'
            >
              BOUNTY
            </Button>
          </Box>
        </Box>

        <Box
          display='flex'
          alignSelf='flex-end'
          justifyContent='center'
          alignItems='center'
          position='absolute'
          style={{ backgroundColor: '#78b847', opacity: '0.8' }}
        >
          <SocmedIcons direction='column' />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
