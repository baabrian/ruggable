import { Grid, makeStyles, Typography } from '@material-ui/core';
import { DropDown } from './DropDown';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  popOverPaper: {
    height: '500px',
    width: '100%',
    top: '4.5rem',
    left: 0,
    right: 0,
  },
  button: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    padding: '10px 30px',
  },
  card: {
    position: 'relative',
    height: '400px',
    width: '400px',
  },
  underline: {
    borderBottom: '3px solid #ffce29',
    fontSize: '2em',
  },
});

type MoreProps = {
  name: string;
};

export function More({ name }: MoreProps) {
  const classes = useStyles();
  return (
    <>
      <DropDown name={name}>
        <Grid item lg={6} xs={6} md={6}>
          <Grid container direction='row' justify='space-evenly'>
            <Grid item>
              <Typography>Featured</Typography>
              <Grid container direction='column'>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Textures</Typography>
              <Grid container direction='column'>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Category</Typography>
              <Grid container direction='column'>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DropDown>
    </>
  );
}
