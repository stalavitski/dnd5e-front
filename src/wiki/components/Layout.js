import React from "react";
import { Route, Switch } from "react-router-dom";

import BaseComponent from "../../core/components/BaseComponent";
import Home from "./Home";
import Race from "../../race/components/Race";
import Races from "../../race/components/Races";


class Layout extends BaseComponent {
  render () {
    return (
      <div className="wiki">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/race">
            <Races />
          </Route>
          <Route exact path="/race/:id">
            <Race id={this.props.match.params.id} />
          </Route>
        </Switch>
      </div>
    )
  }
}


export default Layout;