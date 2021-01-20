import { Grid, Typography } from '@material-ui/core';
import { DropDown } from './DropDown';
import { Link } from 'react-router-dom';

type StyleProps = {
  name: string;
};

export function Style({ name }: StyleProps) {
  return (
    <>
      <DropDown name={name}>
        <Grid item lg={6} xs={6} md={6}>
          <Grid container direction='row' justify='space-evenly'>
            <Grid item>
              <Typography>Popular</Typography>
              <Grid container direction='column'>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
                <Link to='/'>New Arrivals</Link>
              </Grid>
            </Grid>
            <Grid item>
              <Typography>Collections</Typography>
              <Grid container direction='row' spacing={3}>
                <Grid item>
                  <Grid container direction='column'>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>New Arrivals</Link>
                    <Link to='/'>New Arrivals</Link>
                  </Grid>
                </Grid>
                <Grid item>
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
          </Grid>
        </Grid>
      </DropDown>
    </>
  );
}
