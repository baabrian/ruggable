import { Landing } from './Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
