import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './navigation';
import Home from './home';
import About from './about';
import Contact from './contact';
import Projects from './projects';

function App() {
  return (
    <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
      <div className='App'>
        <Navigation LogoTitle='React Portfolio' />
        <Route
          exact
          path='/'
          render={() => (
            <Home
              title='Nicolae Rastau'
              subtitle='Frontend developer - JavaScript'
              button='Find Out More'
            />
          )}
        />
        <Route path='/about/' render={() => <About />} />
        <Route path='/contact' render={() => <Contact title='Contact' />} />
        <Route path='/projects' render={() => <Projects title='Projects' />} />
      </div>
    </HashRouter>
  );
}

export default App;
