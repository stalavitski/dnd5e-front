import React from "react";
import { Route, Switch } from "react-router-dom";


class RouteRenderer {
  constructor(routes) {
    if (routes == null) {
      throw new ReferenceError(`'routes' attribute should be specified for ${this.constructor.name}.`)
    }

    this.routes = routes
  }

  render() {
    return (
      <Switch>
        {
          this.routes.map((route, i) => {
            return <Route component={route.component} exact={route.exact} key={i} path={route.path} />
          })
        }
      </Switch>
    )
  }
}

export default RouteRenderer
