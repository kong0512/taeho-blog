import React from 'react';
import logo from '../logo.svg';
import './App.css';
import './Views/Post/PostPage.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PostPage from './Views/Post/PostPage.js';
import WritePostPage from './Views/WritePost/WritePostPage.js';
import Header from './Views/Common/Header.js';
import Footer from './Views/Common/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
         <Route exact path="/write" component={WritePostPage} />
          <Route exact path="/" component={PostPage} />
          <Route exact path="/:postId" component={PostPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
