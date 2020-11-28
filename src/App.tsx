import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import DetailCharacter from './pages/DetailCharacter';
import DetailLocation from './pages/DetailLocation';
import DetailEpisode from './pages/DetailEpisode';
import Layout from './components/Layout';
import Authentication from './auth/Authentication';
import AuthRoute from './auth/AuthRoute';

function App() {
  return (
    <Authentication.ProviderAuth>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <AuthRoute path="/login">
              <Login />
            </AuthRoute>
            <AuthRoute path="/register">
              <Register />
            </AuthRoute>
            <Route path="/detailCharacter/:CharacterId">
              <DetailCharacter />
            </Route>
            <Route path="/detailLocation">
              <DetailLocation />
            </Route>
            <Route path="/detailEpisode/:EpisodeId">
              <DetailEpisode />
            </Route>  
          </Switch>
        </Layout>
      </Router>
    </Authentication.ProviderAuth>
  );
}

export default App;
