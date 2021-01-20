import {
  Toolbar,
  Drawer,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  makeStyles,
  Grid,
  Container,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';

const useStyles = makeStyles({
  drawer: {
    '& .MuiDrawer-paper': {
      width: '20rem',
      top: '4.6rem',
    },
  },
  expanded: {
    '&$expanded': {
      margin: '0',
    },
  },
  footer: {
    height: '100%',
    color: 'white',
    backgroundColor: '#2f333d',
  },
  grid: { padding: '3rem' },
});

export function NavBarDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Toolbar onClick={handleOpen}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        variant='persistent'
        anchor='left'
        open={open}
        className={classes.drawer}>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Size</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Colors</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Style</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>Featured</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>More</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Accordion classes={{ expanded: classes.expanded }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography>How It Works</Typography>
          </AccordionSummary>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
          <AccordionDetails>Blue And green</AccordionDetails>
        </Accordion>
        <Grid
          container
          direction='row'
          justify='space-evenly'
          className={classes.grid}>
          <Grid item>BUTTON</Grid>
          <Grid item>CURRENCY</Grid>
        </Grid>
        <footer className={classes.footer}>
          <Container>
            <Typography>Free Shipping</Typography>
            <span>white line</span>
            <Typography>
              Ruggable.com site-wide FREE SHIPPING applies to standard shipping
              and handling within the U.S., and Canada, excluding Hawaii,
              Alaska, and U.S. Territories (other than Washington, D.C.).
            </Typography>
          </Container>
        </footer>
      </Drawer>
    </>
  );
}
