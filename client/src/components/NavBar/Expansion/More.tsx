import { Grid, Typography } from '@material-ui/core';
import { DropDown } from './DropDown';
import { Link } from 'react-router-dom';

type MoreProps = {
  name: string;
};

export function More({ name }: MoreProps) {
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
