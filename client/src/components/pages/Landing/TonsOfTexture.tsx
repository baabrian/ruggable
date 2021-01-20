import {
  Grid,
  Card,
  CardMedia,
  Button,
  Typography,
  CardContent,
} from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
    height: 300,
  },
});

export function TonsOfTexture() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h2'>Tons of Textures</Typography>
      <Typography variant='h3'>
        Though chenille is our classic tecture, we're constanly designing new
        washable options for you. We now offer Shad, Plush Moroccan, and even
        washable Outdoor Rugs
      </Typography>
      <Grid container spacing={4} direction='row' justify='space-evenly'>
        <Grid item xs={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
            />
            <CardContent>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
            />
            <CardContent>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
            />
            <CardContent>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
              <Typography>Tons of Textures</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
            />
            <CardContent>
              <Typography>Testing</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
