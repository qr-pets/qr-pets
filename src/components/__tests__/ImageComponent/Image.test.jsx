
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageComponent from '../../ImageComponent/Image';

describe('ImageComponent', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<ImageComponent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders props as expected', () => {
    const props = {
      src: 'https://s3.us-east-2.amazonaws.com/qr-pets-images/IMG_3855.JPG',
      alt: 'test',
      w: 10,
      h: 10,
    };
    const wrapper = shallow(
      <ImageComponent
        src={props.src}
        alt={props.alt}
        width={props.w}
        height={props.h}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
