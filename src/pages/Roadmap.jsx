import {
  Box,
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import RoadmapBG from 'assets/roadmap/roadmap.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundImage: `url(${RoadmapBG})`,
    height: 'fit-content',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    imageRendering: 'auto',
    boxShadow: ' inset 0 0 0 1000px rgba(202, 196, 209,.3)',
    color: 'black',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const Roadmap = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={styles.heading}>Q4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={styles.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography className={styles.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </Box>
  );
};

export default Roadmap;
