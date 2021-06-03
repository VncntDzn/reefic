import { useState } from 'react';
import {
  Grid,
  makeStyles,
  Box,
  Hidden,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from '@material-ui/core';
import Hamburger from 'hamburger-react';
import ElevationScroll from './ElevationScroll';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import BurgerMenu from './BurgerMenu';

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

const Navbar = (props) => {
  const styles = useStyles();
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color='transparent'>
          <Toolbar>
            <Grid
              className={styles.container}
              container
              item
              alignItems='center'
              justify='space-evenly'
            >
              <Box>
                <Link
                  color='secondary'
                  className={styles.titleContainer}
                  variant='h1'
                >
                  REEFiC
                  <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>
                    PROTOCOL
                  </span>
                </Link>
              </Box>

              <Hidden lgUp>
                <Box zIndex={1}>
                  <Hamburger
                    size={22}
                    toggled={toggle}
                    toggle={() => setToggle(!toggle)}
                  />
                </Box>

                <BurgerMenu open={toggle} />
              </Hidden>
              <Hidden mdDown>
                <Typography>PRODUCT</Typography>
                <Typography>TOKEN SALE</Typography>
                <Typography>TEAM</Typography>
                <Typography>FAQ</Typography>
                <Typography>CONTACT</Typography>
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
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default Navbar;
