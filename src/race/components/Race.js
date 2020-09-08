import React from "react";

import BaseComponent from "../../core/components/BaseComponent";
import RacialFeature from "./RacialFeature";


class Races extends BaseComponent {
  state = {
    race: null
  }

  async componentDidMount () {
    const race = await this.server.getRace(this.props.id);
    document.title = `${this.baseTitle} - ${race.name}`;
    this.setState({ race: race });
  }

  render () {
    const race = this.state.race;

    if (! race) {
      return super.render();
    }

    return (
      <React.Fragment>
        <h1>{race.name} Features</h1>
        <ul>
          <RacialFeature name="Age" value={race.age} />
          <RacialFeature name="Alignment" value={race.alignment} />
          <RacialFeature name="Size" value={race.sizeDescription} />
          <RacialFeature name="Speed" value={race.speedDescription} />
          <RacialFeature condition={race.flightSpeed} name="Flight" value={race.flightSpeedDescription} />
          <RacialFeature condition={race.climbSpeed} name="Climb" value={race.climbSpeedDescription} />
        </ul>
      </React.Fragment>
    )
  }
}

export default Races;