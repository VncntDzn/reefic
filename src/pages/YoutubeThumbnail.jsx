import React from 'react';
import { Typography, Box, makeStyles, Button } from '@material-ui/core';
import Vector from 'assets/Vector.svg';
import Youtube from 'assets/youtube_thumbnail.PNG';
import SocmedIcons from 'components/SocmedIcons';

const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  vectorContainer: {
    objectFit: 'cover',
    width: '100%',
    height: '70vh',
    marginTop: '-3rem',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      height: '40rem',
    },
  },
  imageContainer: {
    objectFit: 'contain',
    height: '10rem',
    width: 'auto',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      height: '20rem',
    },
  },
}));
const YoutubeThumbnail = (props) => {
  const styles = useStyles();
  return (
    <>
      <img className={styles.vectorContainer} src={Vector} alt='Vector' />

      <Box className={styles.container}>
        <Typography
          color='primary'
          variant='h1'
          style={{
            zIndex: 1,
            marginTop: 15,
            fontWeight: 700,
            marginBottom: 15,
          }}
        >
          REEFIC PROTOCOL EXPLAINED
        </Typography>
        <img
          className={styles.imageContainer}
          src={Youtube}
          alt='Youtube thumbnail'
        />

        <Box>
          <SocmedIcons backgroundColor='white' direction='row' />
        </Box>

        <Box display='flex' justifyContent='space-evenly' width={'15rem'}>
          <Button variant='contained' color='primary'>
            WHITEPAPER
          </Button>
          &nbsp;
          <Button variant='contained' color='primary'>
            ONE PAGER
          </Button>
        </Box>
      </Box>
    </>
  );
};

YoutubeThumbnail.propTypes = {};

export default YoutubeThumbnail;
