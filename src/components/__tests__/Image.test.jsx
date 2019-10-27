
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from '../Image';

describe('Image', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Image />);

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
      <Image
        src={props.src}
        alt={props.alt}
        width={props.w}
        height={props.h}
      />,
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
