import React from "react";
import Home from "./pages/Home";
import Album from "./pages/Album";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/albums">
            <Album />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
