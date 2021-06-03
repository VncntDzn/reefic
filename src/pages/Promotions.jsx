import { Typography, Box, makeStyles, Button } from '@material-ui/core';
import BlockChainContact from 'assets/Blockchain_opportunity.jpg';
import SocmedIcons from 'components/SocmedIcons';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${BlockChainContact})`,
    height: '40vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: 'auto',
    boxShadow: ' inset 0 0 0 1000px rgba(76, 19, 81,.3)',
    color: theme.palette.secondary.main,
  },
}));
const Promotions = () => {
  const styles = useStyles();
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      className={styles.container}
    >
      <Typography
        style={{ fontWeight: 700, fontSize: 'clamp(1.3rem, 5vw ,2rem)' }}
      >
        DON'T MISS THE OPPORTUNITY!
      </Typography>
      <Button
        variant='contained'
        style={{
          backgroundColor: '#78b847',
          color: '#7f3f97',
          height: 'fit-content',
        }}
      >
        REGISTER NOW
      </Button>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <SocmedIcons backgroundColor={'white'} direction={'row'} />
      </Box>
    </Box>
  );
};

export default Promotions;
