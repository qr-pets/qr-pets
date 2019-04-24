import React, { Component } from 'react';
import TextLabel from './components/InfoComponent/TextLabel';
import TabbedPage from './components/InfoComponent/TabbedPage';
import Image from './components/ImageComponent/Image';
import Thumbnail from './components/ImageComponent/Thumbnail';
import './App.css';

class QRPets extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     foundation: '',
  //   };
  // }

  render() {
    return (
      <div className="App">
        <h1 className="titleHeader">Adopt a pet today!</h1>
        <div className="container">
          <Thumbnail src="https://s3.us-east-2.amazonaws.com/qr-pets-images/IMG_3855.JPG" alt="TEST" />
          <TextLabel label="Name" value="MooMoo" />
          <TextLabel label="Age" value="3" />
          <TextLabel label="Breed" value="Guinea Pig" />
          <TabbedPage tabs={['info', 'photos', 'videos']} info={['moooooo', 'pics here', 'vids here']} />
        </div>
      </div>
    );
  }
}

// QRPets.defaultProps = {
//   foundation: 'today',
// };

export default QRPets;
