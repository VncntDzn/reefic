import { makeStyles, Box, Button, Typography } from '@material-ui/core';
import ReCAPTCHA from 'react-google-recaptcha';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BlockChainContact from 'assets/blockchain_contact.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${BlockChainContact})`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: 'auto',
    boxShadow: ' inset 0 0 0 1000px rgba(67, 71, 95,.3)',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      height: '60vh',
    },
  },
  titleContainer: {
    fontWeight: 700,
    fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
    display: 'flex',
    flexDirection: 'column',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    padding: '0 1rem',
    [theme.breakpoints.up('lg')]: {
      width: '30vw',
    },
  },
  credentialsContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  formActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },

  inputContainer: {
    backgroundColor: 'white',
    outline: 'none',
    borderRadius: '8px',
    border: 'none',
    height: '5vh',
    padding: '0.7rem',
  },
}));

const Contact = (props) => {
  const styles = useStyles();
  return (
    <Box
      display='flex'
      alignItems='center'
      flexDirection='column'
      paddingTop={5}
      px={1}
      className={styles.container}
    >
      <Typography className={styles.titleContainer}>GET IN TOUCH</Typography>
      <Typography>
        Any questions? Reach out to us and we'll get back to you shortly.
      </Typography>
      <Box
        display='flex'
        alignItems='center'
        flexWrap='wrap'
        justifyContent='space-between'
      >
        <Button style={{ color: '#A9A6B2' }} startIcon={<PhoneIcon />}>
          +65 -XXXX-XXXX
        </Button>
        <Button style={{ color: '#A9A6B2' }} startIcon={<EmailIcon />}>
          enquiry@reefic.sg
        </Button>
        <Button style={{ color: '#A9A6B2' }} startIcon={<TelegramIcon />}>
          join our telegram
        </Button>
      </Box>

      <form className={styles.formContainer} noValidate autoComplete='off'>
        <Box className={styles.credentialsContainer} marginBottom={1}>
          <input placeholder='Name' className={styles.inputContainer} />
          &nbsp;
          <input placeholder='Email' className={styles.inputContainer} />
        </Box>
        <textarea
          placeholder='Write your message'
          className={styles.inputContainer}
          multiple
          style={{ height: '12vh' }}
        />
        &nbsp;
        <Box className={styles.formActions}>
          <ReCAPTCHA
            sitekey='Your client site key'
            onChange={() => alert('Not implemented')}
            style={{ width: 'fit-content' }}
          />
          <Button
            variant='contained'
            style={{
              backgroundColor: '#78b847',
              color: '#7f3f97',
              height: 'fit-content',
            }}
          >
            SUBMIT NOW
          </Button>
        </Box>
      </form>
    </Box>
  );
};

Contact.propTypes = {};

export default Contact;
