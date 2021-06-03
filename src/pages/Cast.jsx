import { Box, makeStyles, Typography } from '@material-ui/core';
import Unknown from 'assets/cast/unknown.jpg';
import Linkedin from 'assets/cast/Linkedin.png';
import CastBG from 'assets/cast/cast.png';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${CastBG})`,
    height: 'fit-content',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: 'auto',
    boxShadow: ' inset 0 0 0 1000px rgba(202, 196, 209,.3)',
    color: 'black',
  },
  castContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    [theme.breakpoints.up('sm')]: {
      width: '80vw',
    },
    [theme.breakpoints.up('md')]: {
      width: '60vw',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30vw',
    },
  },
  imageContainer: {
    height: '7rem',
  },
  titleContainer: {
    fontWeight: 700,
    fontSize: 'clamp(1.2rem, 5vw, 1.7rem)',
    display: 'flex',
    flexDirection: 'column',
  },
}));
const cast = [
  { image: Unknown, name: 'ADRIEL HENG', role: 'LEAD' },
  { image: Linkedin, name: '', role: '' },
  { image: Unknown, name: 'CHRIS NG', role: 'LEAD' },
  { image: Unknown, name: 'QINGXIANG', role: 'LEAD' },
  { image: Unknown, name: 'ADRIEL HENG', role: 'LEAD' },
  { image: Unknown, name: 'ANNE CHEAH', role: 'LEAD' },
  { image: Unknown, name: 'CHRIS NG', role: 'LEAD' },
  { image: Unknown, name: 'QINGXIANG', role: 'LEAD' },
];

const castTwo = [
  { image: Unknown, name: 'ADRIEL HENG', role: 'COMPANY' },
  { image: Linkedin, name: '', role: '' },
  { image: Unknown, name: 'CHRIS NG', role: 'COMPANY' },
  { image: Unknown, name: 'QINGXIANG', role: 'COMPANY' },
  { image: Unknown, name: 'ADRIEL HENG', role: 'COMPANY' },
  { image: Unknown, name: 'ANNE CHEAH', role: 'COMPANY' },
  { image: Unknown, name: 'CHRIS NG', role: 'COMPANY' },
  { image: Unknown, name: 'QINGXIANG', role: 'COMPANY' },
];
const Cast = (props) => {
  const styles = useStyles();

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      className={styles.container}
    >
      <Typography className={styles.titleContainer} color='primary'>
        MEET THE CAST
      </Typography>
      <Typography
        className={styles.titleContainer}
        color='primary'
        style={{ fontSize: '1rem' }}
      >
        DEVELOPMENT TEAM
      </Typography>
      <Box className={styles.castContainer}>
        {cast.map((data, index) => (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            key={index}
          >
            <img
              className={styles.imageContainer}
              src={data.image}
              alt={data.image}
            />
            <Typography variant='h1' style={{ fontSize: 16, fontWeight: 700 }}>
              {data.name}{' '}
            </Typography>
            <Typography
              variant='subtitle1'
              style={{ color: 'gray', fontSize: 14, fontWeight: 700 }}
            >
              {data.role}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography
        className={styles.titleContainer}
        color='primary'
        style={{ fontSize: '1rem' }}
      >
        ADVISORS
      </Typography>
      <Box className={styles.castContainer}>
        {castTwo.map((data, index) => (
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            key={index}
          >
            <img
              className={styles.imageContainer}
              src={data.image}
              alt={data.image}
            />
            <Typography variant='h1' style={{ fontSize: 18, fontWeight: 700 }}>
              {data.name}{' '}
            </Typography>
            <Typography
              variant='subtitle1'
              style={{ color: 'gray', fontSize: 16, fontWeight: 700 }}
            >
              {data.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Cast;
