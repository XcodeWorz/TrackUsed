import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './container/nav';
import Main from './container/main';
import About from './container/about'
import Track from './container/track';
import Footer from './container/footer';
import Service from './container/service';
import Login from './container/login';
import List from './container/list';
import Create from './container/create';
import Contact from './container/contact';
import Edit from './container/edit';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Router>
        <Route exact path='/' component={About} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/track' component={Track} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/list' component={List} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/edit/:id' component={Edit} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
