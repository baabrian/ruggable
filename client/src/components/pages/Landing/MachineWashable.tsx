//import {Image, Card, Button } from 'semantic-ui-react';
import { Grid, Card, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import '../../style/index.css';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        '&:hover': {
          backgroundColor: 'orange',
        },
      },
    },
  },
});

const useStyles = makeStyles({
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    padding: '10px 30px',
  },
  card: {
    position: 'relative',
  },
  underline: {
    borderBottom: '3px solid #ffce29',
    fontSize: '2em',
  },
});

export function MachineWashable() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant='h3'>
        Machine Washable rugs for every space in your home.
      </Typography>
      <Grid container direction='row' justify='space-around' spacing={4}>
        <Grid item xs={12} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/Desktop_BestSellers-Damali.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <MuiThemeProvider theme={theme}>
              <Button className={classes.button}>
                <Typography className={classes.underline}>
                  Shop Best Sellers
                </Typography>
              </Button>
            </MuiThemeProvider>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className={classes.card}>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/Desktop_BestSellers-Damali.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <Button className={classes.button}>
              <Typography className={classes.underline}>
                Shop Best Sellers
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
