import React from "react";
import { Link } from "react-router-dom";

import BaseComponent from "../../core/components/BaseComponent";


class Races extends BaseComponent {
  state = {
    races: []
  }

  async componentDidMount () {
    document.title = `${this.baseTitle} - Races`;
    const races = await this.server.getRaces();
    this.setState({ races: races });
  }

  render () {
    const races = this.state.races;

    if (! races.length) {
      return super.render();
    }

    return (
      <React.Fragment>
        Races
        <ul>
          {
            races.map((race, index) => {
              return (
                <li key={index}>
                  <Link className="dropdown-item" key={index} to={`race/${race.id}`}>
                    {race.name}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default Races;