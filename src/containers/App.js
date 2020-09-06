import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Posts from "./Posts/Posts";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/posts" exact component={Posts}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
