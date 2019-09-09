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
      // info: '',
      age: '',
      breed: '',
      info: '',
      name: '',
      qrId: '',
      s3Url: '',
      petId: '',
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const qid = params.qrId;
    const { data } = await axios.get(`/profile/${qid}`);
    const age = data.info.M.age.N;
    const breed = data.info.M.breed.S;
    const info = data.info.M.info.S;
    const name = data.name.S;
    const qrId = data.qrId.N;
    const s3Url = data.s3Url.S;
    const petId = data.petId.N;
    // const { data } = await axios.get(`/profile/${qrId}`);
    // const { imageUrl, petName } = data;

    this.setState({
      age,
      breed,
      info,
      name,
      qrId,
      s3Url,
      petId,
    });
  }

  render() {
    const {
      age,
      breed,
      info,
      name,
      qrId,
      s3Url,
      petId,
    } = this.state;

    return (
      <div className="container">
        <h1 className="titleHeader">Adopt a pet today!</h1>
        <div className="section" id="basicInfo">
          <div className="section" id="profilePicture">
            <Image imageClassName="thumbnail" src={s3Url} alt={name} width={100} height={100} />
          </div>
          <div className="section" id="basicTextInfo">
            <TextLabel label="Name" value={name} />
            <TextLabel label="Age" value={age} />
            <TextLabel label="Breed" value={breed} />
          </div>
        </div>
        <br />
        <TabbedPage tabs={['info', 'photos', 'videos']} info={[info, picString, vidString]} />
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
