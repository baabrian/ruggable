import { Card, Button, Grid, CardMedia } from '@material-ui/core';

export function NewestArrivals() {
  const renderNewArrivals = () => {
    let cards = [];

    for (let i = 0; i < 4; i++) {
      cards.push(
        <Grid item xs={6} lg={3}>
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
      );

    }

    return cards
  };
  return (
    <div>
      <h3>Machine Washable rugs for every space in your home.</h3>
      <Grid container spacing={4}>{renderNewArrivals()}</Grid>
    </div>
  );
}
