import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
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
      imageUrl: '',
      petName: '',
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const { qrId } = params;
    const { data } = await axios.get(`/profile/${qrId}`);
    const { imageUrl, petName } = data;

    this.setState({
      imageUrl,
      petName,
    });
  }

  render() {
    const { imageUrl, petName } = this.state;

    return (
      <div className="container">
        <h1 className="titleHeader">Adopt a pet today!</h1>
        <div className="section" id="basicInfo">
          <div className="section" id="profilePicture">
            <Image imageClassName="thumbnail" src={imageUrl} alt={petName} width={100} height={100} />
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
    );
  }
}

QRPets.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      qrId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default QRPets;
