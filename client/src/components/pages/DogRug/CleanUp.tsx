import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { RoundedButton } from '../../styles';

const useStyles = makeStyles({
  container: {
    padding: '4rem 0',
    backgroundColor: '#f5f6fa',
  },
  header: {
    margin: '1rem 0',
    textAlign: 'center',
  },
});

export function CleanUp() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h3' className={classes.header}>
        Cleanup Made Easy
      </Typography>
      <Grid container direction='row' spacing={3} justify='center'>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardMedia
              component='video'
              src={
                process.env.PUBLIC_URL +
                '/videos/01-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_A.mp4'
              }
              style={{ height: '100%', padding: '2rem' }}
              autoPlay
              loop
              muted
            />
            <CardContent>
              <Typography>1 Stain</Typography>
              <Typography>
                Muddy paws? Pet hair? Spills? Pee accidents? Don’t worry, we’ve
                got you covered.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardMedia
              component='video'
              src={
                process.env.PUBLIC_URL +
                '/videos/02-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_B.mp4'
              }
              style={{ height: '100%', padding: '2rem' }}
              autoPlay
              loop
              muted
            />
            <CardContent>
              <Typography>2 Peel</Typography>
              <Typography>
                When it’s time to wash, simply peel off the Rug Cover from the
                Rug Pad.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card>
            <CardMedia
              component='video'
              src={
                process.env.PUBLIC_URL +
                '/videos/03-Dog_Gif-_Messy_Paws-_500x375-_Steps_-_20190807_C.mp4'
              }
              style={{ height: '100%', padding: '2rem' }}
              autoPlay
              loop
              muted
            />
            <CardContent>
              <Typography>3 Wash</Typography>
              <Typography>
                Toss it in the washer, dry, and enjoy your freshly cleaned rug!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <RoundedButton>Shop Dog-Friendly Rugs</RoundedButton>
      </Grid>
    </div>
  );
}
