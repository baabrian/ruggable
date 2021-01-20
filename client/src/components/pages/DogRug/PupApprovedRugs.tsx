import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    margin: '1rem 0',
    textAlign: 'center',
  },
  container: {
    padding: '4rem 0'
  }
});

export function PupApprovedRugs() {
  const classes = useStyles();
  return (
    <div className={classes.container}> 
      <Typography variant='h2' className={classes.header}>Pup-Approved Rugs</Typography>
      <Typography className={classes.header}>
        Make your home the perfect pet sanctuary with our best-loved rugs!
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={6} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL +
                '/img/vintage-daisy-bordered-blue-A-RC-RE133-57_720x720.jpg'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <CardContent>
              <Grid container alignItems='center' direction='column'>
                <Typography>Vintage Daisy Bordered Blue Rug</Typography>
                <Typography>Stars</Typography>
                <Typography>$80 - $399</Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card>
            <CardMedia
              component='image'
              image={
                process.env.PUBLIC_URL +
                '/img/cambria-sapphire-V2-A-RC-JB013-57_1f2eafb0-9bed-41e6-9ab3-414866b2296a_720x720.jpg'
              }
              style={{
                height: 0,
                paddingTop: '56.25%',
              }}
            />
            <CardContent>
              <Grid container alignItems='center' direction='column'>
                <Typography>Vintage Daisy Bordered Blue Rug</Typography>
                <Typography>Stars</Typography>
                <Typography>$80 - $399</Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL +
                '/img/linear-aztec-black-A-RC-0208-57_720x720.jpg'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <CardContent>
              <Grid container alignItems='center' direction='column'>
                <Typography>Vintage Daisy Bordered Blue Rug</Typography>
                <Typography>Stars</Typography>
                <Typography>$80 - $399</Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <CardContent>
              <Grid container alignItems='center' direction='column'>
                <Typography>Vintage Daisy Bordered Blue Rug</Typography>
                <Typography>Stars</Typography>
                <Typography>$80 - $399</Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
