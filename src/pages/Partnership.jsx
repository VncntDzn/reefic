import {
  makeStyles,
  Box,
  Typography,
  IconButton,
  Hidden,
} from '@material-ui/core';
import Beratex from 'assets/partnership/beratex.png';
import Cow from 'assets/partnership/cow.png';
import Flaser from 'assets/partnership/flaser.png';
import BrownBear from 'assets/partnership/brown-bear.png';
import AmarilloLogo from 'assets/partnership/amarillo-logo.png';
import Turtle from 'assets/partnership/turtle.png';

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'space-between',
    color: theme.palette.secondary.main,
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
      padding: '0 8rem',
    },
  },
  titleContainer: {
    fontWeight: 700,
    fontSize: 'clamp(1.3rem, 4vw, 1.7rem)',
    display: 'flex',
    flexDirection: 'column',
  },
}));
const images = [AmarilloLogo, Cow, Turtle, Flaser, Beratex, BrownBear];
const Partnership = () => {
  const styles = useStyles();
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Typography className={styles.titleContainer} color='primary'>
        PARTNERSHIPS
      </Typography>
      <Box display='flex' flexWrap='wrap' justifyContent='center'>
        <Hidden mdDown>
          <IconButton>
            <ArrowLeftIcon />
          </IconButton>
        </Hidden>
        {images.map((data, i) => (
          <Box key={i} display='flex' flexDirection='row'>
            <img style={{ height: '7rem' }} src={data} alt='data' />
          </Box>
        ))}
        <Hidden mdDown>
          <IconButton>
            <ArrowRightIcon />
          </IconButton>
        </Hidden>
      </Box>
    </Box>
  );
};

export default Partnership;
