import { Typography, Card, CardMedia, Button, Grid } from '@material-ui/core';

export function PerfectRugSize() {
  return (
    <div>
      <Typography>Find the perfect Rug Size for your space</Typography>
      <Typography>
        We have round rugs, runners, and even large area rugs.
      </Typography>
      <Grid container direction='row' justify='space-between' spacing={2}>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
              style={{ height: 0, paddingTop: '56.25%', objectFit: 'contain' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
              style={{ height: 0, paddingTop: '56.25%', objectFit: 'contain' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
              style={{ height: 0, paddingTop: '56.25%', objectFit: 'contain' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
              style={{ height: 0, paddingTop: '56.25%', objectFit: 'contain' }}
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
