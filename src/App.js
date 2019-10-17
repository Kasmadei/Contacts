import React from 'react';
import { Switch, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import mainContainer from "./containers/mainContainer";


function App() {
  return (
    <>
      <Switch>
        <Route exact path={`/`} component={mainContainer} />
      </Switch>
    </>
  );
}


export default App;
