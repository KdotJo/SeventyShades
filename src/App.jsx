import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import Seasons from './Seasons/Seasons';
import Spring from './Seasons/Spring/spring';
import Summer from './Seasons/Summer/summer'
import Home from './Home/Homepage';
import { AuthState } from './login/authState';
import './app.css';
import Fall from './Seasons/Fall/fall';
import Winter from './Seasons/Winter/winter';
import SpringWT from './Seasons/Spring/SpringWT/SpringWT';
import SpringCT from './Seasons/Spring/SpringCT/SpringCT';
import SummerWT from './Seasons/Summer/SummerWT/SummerWT';
import SummerCT from './Seasons/Summer/SummerCT/SummerCT';
import FallWT from './Seasons/Fall/FallWT/FallWt';
import FallCT from './Seasons/Fall/FallCT/FallCT';
import WinterWT from './Seasons/Winter/WinterWT/WinterWT';
import WinterCT from './Seasons/Winter/WinterCT/WinterCt';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
      <div className='everything'>
        <header className='container-fluid'>
          <nav className='navbar-top'>
            <div className='navbar-spacing'>
              SeventyShades
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='home'>
                  Home
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='seasons'>
                    Seasons
                  </NavLink>
                </li>
              )}
              <li className='nav-item'>
                <NavLink className='nav-link' to='about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/home' element={<Home />} />
          <Route path='/seasons' element={<Seasons />} />
          <Route path='/about' element={<About />} />
          <Route path='/spring' element={<Spring />} />
          <Route path='/summer' element={<Summer />} />
          <Route path='/fall' element={<Fall />} />
          <Route path='/winter' element={<Winter />} />
          <Route path='/springwarmtone' element={<SpringWT />} />
          <Route path='/springcoldtone' element={<SpringCT />} />
          <Route path='/summerwarmtone' element={<SummerWT />} />
          <Route path='/summercoldtone' element={<SummerCT />} />
          <Route path='/fallwarmtone' element={<FallWT />} />
          <Route path='/fallcoldtone' element={<FallCT />} />
          <Route path='/winterwarmtone' element={<WinterWT />} />
          <Route path='/wintercoldtone' element={<WinterCT />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
