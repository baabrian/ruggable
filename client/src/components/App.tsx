import { Landing } from './pages/Landing';
import { DogRug } from './pages/DogRug';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

import '../css/App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <Switch>
          {/*<Route exact path='/' component={Landing} /> */}
          <Route exact path='/' component={DogRug} />
        </Switch>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
