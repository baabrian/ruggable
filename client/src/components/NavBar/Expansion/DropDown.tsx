import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  MenuItem,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RoundedButton } from '../../styles';
import React, { useState } from 'react';

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
    margin: 'auto'
  },
  underline: {
    borderBottom: '3px solid #ffce29',
    fontSize: '2em',
  },
});

type DropDownProps = {
  children: React.ReactNode;
  name: string;
};

export function DropDown({ children, name }: DropDownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  console.log(children);

  return (
    <>
      <Button onClick={handleClick}>{name}</Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PopoverClasses={{ paper: classes.popOverPaper }}
        getContentAnchorEl={null}
        onClose={handleClose}>
        <Grid
          container
          direction='row'
          alignItems='center'
          alignContent='center'
          justify='center'
          style={{ height: '100%' }}>
          {children}
          <Grid item lg={6}>
            <Card className={classes.card}>
              <CardMedia
                image={
                  process.env.PUBLIC_URL +
                  '/img/Desktop_BestSellers-Damali.webp'
                }
                style={{
                  height: '400px',
                  paddingTop: '56.25%',
                  objectFit: 'cover',
                }}
              />
              <Button className={classes.button}>
                <Typography className={classes.underline}>
                  Shop Best Sellers
                </Typography>
              </Button>
            </Card>
          </Grid>
          <RoundedButton>Shop Best Sellers</RoundedButton>
        </Grid>
      </Menu>
    </>
  );
}
