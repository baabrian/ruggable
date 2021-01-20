import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RoundedButton } from '../../styles';

const useStyles = makeStyles({
  header: {
    margin: '1rem 0',
  },
});

export function HowOurRugsWork() {
  const classes = useStyles();
  return (
    <Card>
      <Grid container direction='row' wrap='wrap-reverse'>
        <Grid item xs={12} lg={6}>
          <CardMedia
            image={process.env.PUBLIC_URL + '/img/Peelup_HowItWorks.jpg'}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            justify='center'
            alignItems='center'
            style={{ height: '100%' }}>
            <CardContent>
              <Typography variant='h4' className={classes.header}>
                How Our Rugs Work
              </Typography>
              <Typography>
                Ruggable is a 2-piece system that features a lightweight Rug
                Cover and a non-slip Rug Pad. All our Covers are water
                resistant, stain-resistant and can be detached and reattached to
                its Pad without losing its grip, so you can put them in the wash
                as often as you need.
              </Typography>
              <RoundedButton>Shop Best Sellers</RoundedButton>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
