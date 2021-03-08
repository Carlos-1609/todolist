import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import Todo from './components/Pages/Todo/Todo';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Cards from './components/Cards/Cards';
//import CardHolder from './components/Cards/CardHolder';
//

//import imgMeme from './assets/meme.jpg';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/todos" exact>
            <section className="">
            <Todo />
            </section>
          </Route>
          <Route path="/login" exact>
              <section className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 m-6">
                  <Login></Login>
              </section>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;

/*

<section>
        <img src={imgMeme} alt="Un meme" />
      </section>
      <CardHolder>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </CardHolder>

*/
