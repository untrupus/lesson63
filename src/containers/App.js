import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NavBar from "../components/NavBar/NavBar";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import Posts from "./Posts/Posts";
import AddPost from "../components/AddPost/AddPost";
import SinglePost from "./SinglePost/SinglePost";
import EditPost from "./EditPost/EditPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Posts}/>
          <Route path="/posts" exact component={Posts}/>
          <Route path="/posts/add" component={AddPost}/>
          <Route path="/posts/:id" exact component={SinglePost}/>
          <Route path="/about" component={About}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/posts/:id/edit" component={EditPost}/>
          <Route render={() => <h1>404</h1>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
