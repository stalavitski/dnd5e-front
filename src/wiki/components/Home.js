import React from 'react';
import { Link } from 'react-router-dom';

import BaseComponent from '../../core/components/BaseComponent';


class Home extends BaseComponent {
  render () {
    return (
      <React.Fragment>
        <div>
          <Link to="race">
            Races
          </Link>
        </div>
        <div>
          <Link to="class">
            Classes
          </Link>
        </div>
        <div>
          <Link to="background">
            Backgrounds
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;