import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RoundedButton } from '../../styles';

const useStyles = makeStyles({
  header: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageBg: {
    background:
      'url(https://cdn.shopify.com/s/files/1/0284/2666/6115/files/DogLovers_Hero_Desktop_0120.jpg?v=1579042346)',
    height: '600px',
    backgroundSize: 'auto',
    backgroundPosition: '50%',
  },
});

export function Intro() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.imageBg}
      direction='column'
      alignItems='center'
      alignContent='center'
      justify='center'>
      <Typography variant='h3' className={classes.header}>
        The Perfect Rug for Dog Owners
      </Typography>
      <RoundedButton>Shop Dog-Friendly Rugs</RoundedButton>
    </Grid>
  );
}
