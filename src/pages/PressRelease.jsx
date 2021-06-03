import {
  makeStyles,
  Box,
  Hidden,
  Button,
  Typography,
  Card,
  CardContent,
  IconButton,
} from '@material-ui/core';
import BusinessInder from 'assets/BusinessInsider.png';
import BlockchainSummit from 'assets/BlockchainSummit.png';
import NewsBtc from 'assets/NewsBtc.png';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const useStyles = makeStyles((theme) => ({
  textContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
    margin: '1rem',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      width: '20rem',
    },
  },
  imageContainer: {
    height: '20vh',
    width: '50vw',
    objectFit: 'contain',
    [theme.breakpoints.up('sm')]: {
      height: '10vh',
      width: '10rem',
    },
  },
  titleContainer: {
    fontSize: 'clamp(1.3rem, 5vw, 2rem)',
    fontWeight: 700,
    fontFamily: 'Montserrat',
  },
}));

const texts = [
  {
    image: BusinessInder,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
    `,
    date: '17 July 2018',
  },
  {
    image: BlockchainSummit,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
  `,
    date: '17 July 2018',
  },
  {
    image: NewsBtc,
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged 
    `,
    date: '17 July 2018',
  },
];
const PressRelease = () => {
  const styles = useStyles();

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      marginTop={20}
    >
      <Typography className={styles.titleContainer} color='primary'>
        REEFIC PRESS RELEASES
      </Typography>
      <Box className={styles.textContainer}>
        <Hidden mdDown>
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
        </Hidden>
        {texts.map((data, index) => (
          <Card className={styles.cardContainer} key={index}>
            <CardContent>
              <img
                className={styles.imageContainer}
                src={data.image}
                alt={data.image}
              />
              <Typography>{data.text}</Typography>
              <Typography variant='subtitle1'>{data.date}</Typography>
            </CardContent>
          </Card>
        ))}
        <Hidden mdDown>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </Hidden>
      </Box>
      <Button variant='contained' color='primary'>
        MORE RELEASES
      </Button>
    </Box>
  );
};

PressRelease.propTypes = {};

export default PressRelease;
