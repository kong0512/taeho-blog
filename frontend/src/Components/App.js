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
import { Container, Row, Col } from 'react-bootstrap'
import UploadImage from './Views/UploadImage/UploadImage';
import ImageView from './Views/ImageView/ImageView';
import Login from './Views/Login/Login';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col>
            <BrowserRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/image" component={ImageView} />
                <Route exact path="/upload" component={UploadImage} />
                <Route exact path="/write" component={WritePostPage} />
                <Route exact path="/" component={PostPage} />
                <Route exact path="/:postId" component={PostPage} />
              </Switch>
            </BrowserRouter>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
