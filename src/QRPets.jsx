import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextLabel from './components/TextLabel';
import TabbedPage from './components/TabbedPage';
import Image from './components/Image';
import './App.css';

const picString = 'pic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\npic pic pic\n';
const vidString = 'youtube.com\nyoutube.com\nyoutube.com\nyoutube.com';

class QRPets extends Component {
  constructor() {
    super();

    this.state = {
      data: {
        info: {},
      },
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const qid = params.qrId;
    const { data } = await axios.get(`/profile/${qid}`);

    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const { info, id } = data;
    const {
      age,
      breed,
      description,
      name,
    } = info;

    return (
      <div className="container">
        <h1 className="titleHeader">Adopt a pet today!</h1>
        <div className="section" id="basicInfo">
          <div className="section" id="profilePicture">
            <Image
              imageClassName="thumbnail"
              src={`https://qr-pets-images.s3.us-east-2.amazonaws.com/${id}`}
              alt={name}
              width={100}
              height={100}
            />
          </div>
          <div className="section" id="basicTextInfo">
            <TextLabel label="Name" value={name} />
            <TextLabel label="Age" value={age} />
            <TextLabel label="Breed" value={breed} />
          </div>
        </div>
        <br />
        <TabbedPage tabs={['info', 'photos', 'videos']} info={[description, picString, vidString]} />
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
