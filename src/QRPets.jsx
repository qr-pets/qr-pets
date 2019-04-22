import React, { Component } from 'react';
import TextLabel from './LabelComponent/TextLabel';
import Image from './ImageComponent/Image';
import guineapig from './imgs/IMG_3855.JPG';

class QRPets extends Component {
  render() {
    return (
      <div className="App">
        QR-Pets!
        <TextLabel label="Name" value="Wilbur" />
        <TextLabel label="Age" value="5" />
        <TextLabel label="Breed" value="Black Cat" />
        <Image src={guineapig} alt="TEST" w={100} h={50} />
        {/* <img src={guineapig} alt="test" width="75" height="45"/> */}
      </div>
    );
  }
}

export default QRPets;
