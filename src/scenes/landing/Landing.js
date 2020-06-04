import React, { Component } from 'react';

import Header from '../../shared/Header/Header';
import LandingContainer from '../../modules/landing/LandingContainer';

class Landing extends Component {
  render() {
    return (
      <Header>
        <LandingContainer />
      </Header>
    );
  }
}

export default Landing;
