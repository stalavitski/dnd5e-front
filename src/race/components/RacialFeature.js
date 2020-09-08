import React from "react";

import BaseComponent from "../../core/components/BaseComponent";


class RacialFeature extends BaseComponent {
  render () {
    const condition = (this.props.condition === undefined) ? true : this.props.condition;

    return (
      <React.Fragment>
      { condition &&
          <li>
            <b>{this.props.name}.</b> {this.props.value}
          </li>
      }
      </React.Fragment>
    )
  }
}

export default RacialFeature;