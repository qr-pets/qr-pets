import React, { Component } from 'react';
import TextLabel from './components/InfoComponent/TextLabel';
import TabbedPage from './components/InfoComponent/TabbedPage';
import Image from './components/ImageComponent/Image';
import './App.css';

const infoString = 'this is test info.\nlorem ipsum something something somethingsomething\n teset test test\nsay something about the animals!!!!!';
const picString = 'pic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\n';
const vidString = 'youtube.com\nyoutube.com\nyoutube.com\nyoutube.com';

class QRPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // foundation: '',
      petName: 'moomoo',
      petId: 1,
    };
  }

  render() {
    const { petName, petId } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="titleHeader">Adopt a pet today!</h1>
          <div className="section" id="basicInfo">
            <div className="section" id="profilePicture">
              <Image imageClassName="thumbnail" src={`https://s3.us-east-2.amazonaws.com/qr-pets-images/${petName}_${petId}.JPG`} alt={petName} width={100} height={100} />
            </div>
            <div className="section" id="basicTextInfo">
              <TextLabel label="Name" value="MooMoo" />
              <TextLabel label="Age" value="3" />
              <TextLabel label="Breed" value="Guinea Pig" />
            </div>
          </div>
          <br />
          <TabbedPage tabs={['info', 'photos', 'videos']} info={[infoString, picString, vidString]} />
        </div>
      </div>
    );
  }
}

// QRPets.defaultProps = {
//   foundation: 'today',
// };

export default QRPets;
