import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Routes from "./Routes";
import Header from "./Header";

function App(props) {
  return (
    <Container style={{padding: 0}}>
      <CssBaseline>
        <Header isOpen={false} />
        <Routes />
      </CssBaseline>
    </Container>
  );
}

export default App;
