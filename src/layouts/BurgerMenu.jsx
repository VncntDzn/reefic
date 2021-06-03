import { Box, Typography, makeStyles, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '90vh',
    width: '100vw',
    border: '3px solid red',
  },
}));
const BurgerMenu = ({ open }) => {
  const styles = useStyles();
  return (
    <>
      {open && (
        <>
          <hr style={{ width: '100vw' }} />
          <Box
            className={styles.container}
            display='flex'
            flexDirection='column'
            justifyContent='space-evenly'
            alignItems='center'
          >
            <Typography>PRODUCT</Typography>
            <Typography>TOKEN SALE</Typography>
            <hr style={{ width: '50vw' }} />
            <Typography>TEAM</Typography>
            <Typography>FAQ</Typography>
            <Typography>CONTACT</Typography>
            <hr style={{ width: '50vw' }} />
            <Button
              color='secondary'
              variant='outlined'
              endIcon={<CloudDownloadOutlinedIcon />}
            >
              WHITEPAPER
            </Button>
            <Typography>SIGN IN</Typography>
            <Button color='secondary' endIcon={<ArrowDropDownIcon />}>
              EN
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

BurgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default BurgerMenu;
