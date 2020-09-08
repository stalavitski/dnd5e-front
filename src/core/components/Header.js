import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
  databaseLinks = [
    {
      content: "Races",
      to: "/race"
    }
  ]

  render() {
    return (
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            DND 5e
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Database
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    this.databaseLinks.map((link, index) => {
                      return (
                        <Link className="dropdown-item" key={index} to={link.to}>
                          { link.content }
                        </Link>
                      )
                    })
                  }
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;