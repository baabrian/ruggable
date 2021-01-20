import { Grid, Card, CardMedia, Button } from '@material-ui/core';

export function Reviews() {
  return (
    <div>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'>
        <Grid item>
          <h3>Tried, Tested, and Approved!</h3>
        </Grid>
        <Grid item>
          <Button>Read All Reviews</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} direction='row' justify='space-evenly'>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <Button>Purchase</Button>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <Button>Purchase</Button>
          </Card>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Card>
            <CardMedia
              image={
                process.env.PUBLIC_URL + '/img/plush-zig-zag-A-RC-WB007-57.webp'
              }
              style={{ height: 0, paddingTop: '56.25%' }}
            />
            <Button>Purchase</Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
