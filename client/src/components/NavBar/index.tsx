import { useState, useEffect } from 'react';
import {
  AppBar,
  Container,
  Grid,
  Button,
  Typography,
  ButtonGroup,
  InputBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavBarDrawer } from './NavBarDrawer';
import SearchIcon from '@material-ui/icons/Search';
import { Sizes } from './Expansion/Sizes';
import { Colors } from './Expansion/Colors';
import { More } from './Expansion/More';
import { Style } from './Expansion/Style';

const useStyles = makeStyles({
  bar: {
    height: '4.55rem',
    background: 'white',
    boxShadow: '0 1px 2px 0 rgba(227,233,246,.75)',
  },
  hide: {
    display: 'none',
  },
  logo: {
    height: '1rem',
  },
});

export function NavBar() {
  const classes = useStyles();

  const [hideButton, setHideButton] = useState(false);
  const [hideInput, setHideInput] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 1024) {
        setHideButton(true);
      }
      if (window.innerWidth > 1024) {
        setHideButton(false);
      }
      if (window.innerWidth < 768) {
        setHideInput(true);
      }
      if (window.innerWidth > 768) {
        setHideInput(false);
      }
      console.log('testing');
    };
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  });
  //const [searchTerm, setSearchTerm] = useState('What are you looking for?');

  return (
    <AppBar position='sticky' className={classes.bar}>
      <Container style={{ height: '100%' }}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='center'
          alignContent='center'
          style={{ height: '100%' }}>
          <Grid item>
            <Grid
              container
              direction='row'
              justify='space-between'
              alignItems='center'>
              <Grid item className={!hideButton ? classes.hide : ''}>
                <NavBarDrawer />
              </Grid>
              <Grid item>
                <img
                  className={classes.logo}
                  alt='Ruggable Logo'
                  src='https://images.ctfassets.net/9y4fi2gkk4ov/1UhZTIVtnqHRkeYiKopBGx/2062ac70d56d88b8dba29aff25107782/Ruggable_Logotype_Black.svg?w=300&amp;fit=scale'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item style={{ height: '100%' }}>
            <Grid
              container
              direction='row'
              justify='space-between'
              style={{ height: '100%' }}>
              <Grid item className={hideButton ? classes.hide : ''}>
                <ButtonGroup style={{ height: '100%' }}>
                  <Sizes name='Sizes' />
                  <Colors name='Colors' />
                  <More name='More' />
                  <Style name='Styles' />
                  <Button>How It Works</Button>
                </ButtonGroup>
              </Grid>
              <Grid item>
                <InputBase placeholder='What are you looking for' />
                <SearchIcon />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
