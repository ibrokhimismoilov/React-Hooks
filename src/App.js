import React, { useState } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const App = () => {
  const [state, setState] = useState(0);
  return (
    <BrowserRouter>
      <ul>
        <li>
          <NavLink exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
      </ul>
      <Switch>
        <UserContext.Provider value={{ state, setState }}>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/about"} component={About} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
