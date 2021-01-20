import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { DropDown } from './DropDown';

type Size = {
  name: string;
};

export function Sizes({ name }: Size) {
  return (
    <>
      <DropDown name={name}>
        <Grid item lg={6}>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            spacing={2}>
            <Grid item lg={12}>
              <Grid container direction='row' justify='space-evenly'>
                <Grid item lg={3}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>round</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>runners</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>3x5</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={3}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>5x7</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container direction='row' justify='space-between'>
                <Grid item lg={4}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>6x9</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>8x10</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        process.env.PUBLIC_URL + '/img/small-area-rug.webp'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>9x12</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DropDown>
    </>
  );
}
