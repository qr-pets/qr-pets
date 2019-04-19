import React, { Component } from 'react';
import TextLabel from './Labels/TextLabel';

class QRPets extends Component {
  render() {
    return (
      <div className="App">
        QR-Pets!
        <TextLabel label="Name" value="Wilbur" />
        <TextLabel label="Age" value="5" />
        <TextLabel label="Breed" value="Black Cat" />
      </div>
    );
  }
}

export default QRPets;
