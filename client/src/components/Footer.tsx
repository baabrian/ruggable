import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  footer: {
    background: '#212634',
    color: 'white',
  },
  listTitle: {
    color: '#ffe48c',
    textTransform: 'uppercase',
  },
});

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container direction='row' justify='space-between' >
          <Grid item lg={12} md={12} xs={12}>
            <Typography>*Shipping Exclusions Apply</Typography>
            <Typography>
              Ruggable.com site-wide FREE SHIPPING applies to standard shipping
              and handling within the U.S., and Canada, excluding Hawaii,
              Alaska, and U.S. Territories (other than Washington, D.C.).
            </Typography>
            <Typography>
              **Discounts do not apply to sale items, swatches or gift cards
              unless otherwise noted and cannot be combined with any other
              offers. For a full list of exclusions please see our FAQ.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Grid container direction='row' justify='space-between'>
              <Grid item lg={12} xs={12} md={12}>
                <Typography className={classes.listTitle}>Company</Typography>
              </Grid>

              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>About Us</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Philanthropy</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Blog</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Reviews</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>#Ruggable</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Careers</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Terms of Service</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Privacy</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Affilate</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Get 15%</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Grid container direction='row' justify='space-between'>
              <Grid item lg={12} md={12} xs={12}>
                <Typography className={classes.listTitle}>Shop</Typography>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>New Arrivals</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Best Sellers</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>All Rug Collections</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Shop All Colors</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Our Rug Pads</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Gift Card</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Grid container direction='row' justify='space-between'>
              <Grid item lg={12} md={12} xs={12}>
                <Typography className={classes.listTitle}>Support</Typography>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>FAQs</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Contact Us</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Customer Account</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Shipping</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Returns</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Afterpay</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Trade Program</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Rug Size Guide</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Product Safety</Link>
              </Grid>
              <Grid item lg={12} md={6} xs={6}>
                <Link to={{ pathname: '/' }}>Accessibility</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
            <Grid container direction='column' justify='space-between'>
              <Typography className={classes.listTitle}>Connect</Typography>
              <Typography>
                Sign up to recieve 10% OFF your first order, exclusive offers
                and design updates.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}
