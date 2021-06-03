import { Box, makeStyles, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import Medium from 'assets/medium.jpg';

const SocmedIcons = ({ backgroundColor, direction = 'row' }) => {
  const useStyles = makeStyles((theme) => ({
    mediumContainer: {
      height: '1.5rem',
    },
    iconContainer: {
      margin: '0.5rem',
      backgroundColor: backgroundColor
        ? theme.palette.secondary.main
        : 'transparent',
    },
  }));
  const styles = useStyles();

  return (
    <Box
      display='flex'
      flexDirection={direction}
      alignSelf='flex-end'
      justifyContent='center'
      alignItems='center'
    >
      <IconButton className={styles.iconContainer}>
        <TwitterIcon />
      </IconButton>

      <IconButton className={styles.iconContainer}>
        <TelegramIcon />
      </IconButton>

      <IconButton className={styles.iconContainer}>
        <img className={styles.mediumContainer} src={Medium} alt='Medium' />
      </IconButton>
      <IconButton className={styles.iconContainer}>
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

SocmedIcons.propTypes = {};

export default SocmedIcons;
