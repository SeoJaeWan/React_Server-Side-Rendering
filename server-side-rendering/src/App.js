import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Menu from "./components/Menu";
import BluePage from "./pages/BluePage";
import RedPage from "./pages/RedPage";

const GlobalStyle = createGlobalStyle`

  body{
    margin: 0;
  }

  .Box {
    font-size: 1.5 rem;
    color: #fff;
    width: 128px;
    height: 128px;

    margin: 0 auto; 

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Red {
    background-color:red;
  }

  .Blue {
    background-color:blue;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Menu /> <hr />
      <Route path="/red" component={RedPage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
}

export default App;
