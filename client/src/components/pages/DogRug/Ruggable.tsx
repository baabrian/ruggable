import { Typography, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RoundedButton } from '../../styles';

const useStyles = makeStyles({
  container: {
    padding: '4rem 0',
  },
  header: {
    textAlign: 'center',
    margin: '1rem 0',
  },
  bold: {
    fontWeight: 'bold'
  }
});

export function Ruggable() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Typography
          variant='h2'
          className={`${classes.header} ${classes.bold}`}>
          #Ruggable
          <span style={{ fontWeight: 'normal' }}> In Real Life.</span>
        </Typography>
        <Typography className={classes.header}>
          Look how our washable rugs have been pup-approved in real life.
        </Typography>
        <RoundedButton>Shop Dog-Friendly Rugs</RoundedButton>
      </Grid>
    </div>
  );
}
