import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Contacts from "../components/Contacts/Contacts";
import About from "../components/About/About";
import Posts from "../components/Posts/Posts";
import AddPost from "../components/AddPost/AddPost";
import SinglePost from "../components/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/posts/add" component={AddPost}/>
          <Route path="/posts/:id" component={SinglePost}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;