import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    margin: '1rem 0',
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export function Learn() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant='h4' className={classes.header}>
        Learn From the Pros
      </Typography>
      <Grid container direction='row' spacing={3}>
        <Grid item lg={6} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={process.env.PUBLIC_URL + '/img/UGC-content.jpg'}
                className={classes.media}
              />
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Grid container direction='column' alignItems='center'>
                    <Typography variant='h3'className={classes.header}>
                      Your Pet Questions, Answered!
                    </Typography>
                    <Typography>
                      Got questions about Ruggable's commitment to making
                      pet-friendly rugs? We've got the answers
                    </Typography>
                  </Grid>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item lg={6} xs={12}>
          <Card>
            <CardActionArea>
              <CardMedia
                image={process.env.PUBLIC_URL + '/img/UGC-content-2.jpg'}
                className={classes.media}
              />
              <CardContent>
                <div style={{ textAlign: 'center' }}>
                  <Grid container alignItems='center' direction='column'>
                    <Typography variant='h3' className={classes.header}>
                      Why You Need a Washable Rug
                    </Typography>
                    <Typography>
                      Still debating whether you need a washable rug?
                    </Typography>
                    <Typography>
                      Here's why we think they're good investments for your
                      home.
                    </Typography>
                  </Grid>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
