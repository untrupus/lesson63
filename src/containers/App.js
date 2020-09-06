import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Posts from "./Posts/Posts";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/posts" exact component={Posts}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
