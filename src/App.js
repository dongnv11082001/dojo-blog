import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Content>
      </div>
    </Router>
  );
}

const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;

export default App;
