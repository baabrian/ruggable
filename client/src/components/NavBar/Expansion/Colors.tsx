import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  makeStyles,
} from '@material-ui/core';
import { DropDown } from './DropDown';

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
    height: '150',
    width: '150',
  },
  underline: {
    borderBottom: '3px solid #ffce29',
    fontSize: '2em',
  },
});

type ColorsProps = {
  name: string;
};

export function Colors({ name }: ColorsProps) {
  const classes = useStyles();
  return (
    <>
      <DropDown name={name}>
        <Grid item lg={6}>
          <Grid container direction='column' justify='space-evenly' spacing={2}>
            <Grid item lg={12}>
              <Grid container direction='row' justify='space-evenly'>
                <Grid item>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>color</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>color</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>color</CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={12}>
              <Grid container direction='row' justify='space-evenly'>
                <Grid item>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                      }}
                    />
                    <CardContent>color</CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>color</CardContent>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card style={{ height: '100px', width: '100px' }}>
                    <CardMedia
                      image={
                        'https://images.ctfassets.net/9y4fi2gkk4ov/1olKansQ7emn1UOfusdP5S/1e62601b67c8a77e57bce7e73cb3ee99/Swatch_BG.svg?w=160&fit=scale&fm=png&fl=png8'
                      }
                      style={{
                        height: 0,
                        paddingTop: '56.25%',
                        objectFit: 'contain',
                      }}
                    />
                    <CardContent>color</CardContent>
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
