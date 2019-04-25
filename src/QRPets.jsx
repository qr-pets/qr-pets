import React, { Component } from 'react';
import TextLabel from './components/InfoComponent/TextLabel';
import TabbedPage from './components/InfoComponent/TabbedPage';
import Thumbnail from './components/ImageComponent/Thumbnail';
import './App.css';

class QRPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // foundation: '',
      petName: 'moomoo',
      petId: 1,
      onTab: 'info',
    };
  }

  render() {
    const { petName, petId, onTab } = this.state;
    return (
      <div className="App">
        <h1 className="titleHeader">Adopt a pet today!</h1>
        <div className="container">
          <Thumbnail petName={petName} petId={petId} />
          <TextLabel label="Name" value="MooMoo" />
          <TextLabel label="Age" value="3" />
          <TextLabel label="Breed" value="Guinea Pig" />
          <TabbedPage tabs={['info', 'photos', 'videos']} info={['moooooo', 'pics here', 'vids here']} onTab={onTab} />
        </div>
      </div>
    );
  }
}

// QRPets.defaultProps = {
//   foundation: 'today',
// };

export default QRPets;
