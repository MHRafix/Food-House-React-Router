import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import PagenotFound from './components/PagenotFound/PagenotFound';
import Single from './components/SingleFood/Single';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
       <Switch>
          <Route exact path="/home">
            <Shop />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/foods/:foodId">
            <Single />
          </Route>
          <Route path="*">
            <PagenotFound />
          </Route>
        </Switch>
        <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
