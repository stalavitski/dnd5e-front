import React, { Component } from "react";

import Server from "../Server";
import RouteRenderer from "../RouteRenderer";


class BaseComponent extends Component {
  baseTitle = 'DND 5e';
  routes = null
  server = new Server()

  render() {
    return (
      <div className="spinner-loading">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  renderRoutes() {
    const routeRenderer = new RouteRenderer(this.routes);
    return routeRenderer.render();
  }
}


export default BaseComponent;