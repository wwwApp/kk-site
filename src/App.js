import React from "react";
import Home from "./pages/Home";
import Album from "./pages/Album";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Switch>
        <Route path="/albums">
          <Album />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  overflow: hidden;
`;

export default App;
