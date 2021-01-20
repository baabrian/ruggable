import { Grid, Typography, Card } from '@material-ui/core';
//import { SvgIcon } from 'material-ui';
import { CardContent } from 'semantic-ui-react';
import { RoundedButton } from '../../styles';
import { makeStyles } from '@material-ui/core/styles';
import PetFriendly from '../../../icons/Icon_PetFriendly.svg';
import WaterProof from '../../../icons/Icon_Waterproof.svg';
import Ruggable from '../../../icons/Ruggable-Icon-ValueProp-Washable.svg';

const useStyles = makeStyles({
  container: {
    padding: '4rem 0',
  },
  header: {
    textAlign: 'center',
    margin: '2rem 0',
  },
  svg: {
    height: '6rem',
  },
  hideBorder: {
    border: 'none',
    boxShadow: 'none',
  },
});

export function DogApproved() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h4' className={classes.header}>
        Functional and Dog-Approved!
      </Typography>
      <Grid container direction='row' alignItems='center' justify='center' spacing={2}>
        <Grid item lg={4} xs={12}>
          <Card className={classes.hideBorder}>
            <CardContent>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                style={{ textAlign: 'center' }}>
                <Grid item lg={12} md={6} xs={6}>
                  <img
                    className={classes.svg}
                    src={Ruggable}
                    alt='pet Friendly'
                  />
                </Grid>
                <Grid item lg={12} md={6} xs={6}>
                  <Typography variant='h4' className={classes.header}>
                    Machine Washable
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Typography>
                    Meet the first rug made for your washing machine. With our
                    washable Rug Covers, you’ll never have to throw away a dirty
                    rug again!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card className={classes.hideBorder}>
            <CardContent>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                style={{ textAlign: 'center' }}>
                <Grid item lg={12} md={6} xs={6}>
                  <img
                    className={classes.svg}
                    src={WaterProof}
                    alt='pet Friendly'
                  />
                </Grid>
                <Grid item lg={12} md={6} xs={6}>
                  <Typography variant='h4'>Machine Washable</Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Typography>
                    Meet the first rug made for your washing machine. With our
                    washable Rug Covers, you’ll never have to throw away a dirty
                    rug again!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Card className={classes.hideBorder}>
            <CardContent>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                style={{ textAlign: 'center' }}>
                <Grid item lg={12} md={6} xs={6}>
                  <img
                    className={classes.svg}
                    src={PetFriendly}
                    alt='pet Friendly'
                  />
                </Grid>
                <Grid item lg={12} md={6} xs={6}>
                  <Typography variant='h4'>Machine Washable</Typography>
                </Grid>
                <Grid item lg={12} md={12} xs={12}>
                  <Typography>
                    Meet the first rug made for your washing machine. With our
                    washable Rug Covers, you’ll never have to throw away a dirty
                    rug again!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <RoundedButton>Shop Dog-Friendly Rugs</RoundedButton>
      </Grid>
    </div>
  );
}
