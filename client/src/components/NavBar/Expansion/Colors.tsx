import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { DropDown } from './DropDown';

type ColorsProps = {
  name: string;
};

export function Colors({ name }: ColorsProps) {
  return (
    <>
      <DropDown name={name}>
        <Grid item lg={6}>
          <Grid container direction='row' justify='space-evenly' spacing={2}>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
            <Grid item lg={3}>
              <Card style={{ height: '100px', width: '100px' }}>
                <CardMedia
                  image={process.env.PUBLIC_URL + '/img/small-area-rug.webp'}
                  style={{
                    height: 0,
                    paddingTop: '56.25%',
                    objectFit: 'contain',
                  }}
                />
                <CardContent>testing</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </DropDown>
    </>
  );
}
