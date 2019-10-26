import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AdminPetForm from '../../InputComponent/AdminPetForm';

jest.mock('axios');

describe('AdminPetForm', () => {
  const file = { name: 'moomoo', type: 'html/jpeg' };
  const tagsString = 'guinea pig, moomoo, fluffy';
  const firstPicture = { name: 'frodo', type: 'html/jpeg' };
  let wrapper;
  let wrapperInst;

  const mockedDate = new Date(2017, 11, 10);
  global.Date = jest.fn(() => mockedDate);

  axios.post.mockImplementation((url, payload) => (payload.id.includes('badId')
    ? Promise.reject(new Error('error'))
    : ({ data: 'someUrl' })));
  axios.put.mockReturnValue({ data: 'someUrl' });

  beforeEach(() => {
    wrapper = shallow(<AdminPetForm />);
    wrapperInst = wrapper.instance();
  });

  it('renders as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('setState {image list} on handlefileSelect', () => {
    const img = [file];
    const fileSelectSpy = jest.spyOn(wrapperInst, 'handleFileSelect');
    wrapperInst.handleFileSelect({ target: { files: img } });
    expect(fileSelectSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().fileList).toEqual(img);
  });

  it('setState on tags text change', () => {
    const t = { target: { value: 'guinea pig, moomoo, floof' } };
    wrapperInst.handleTextChange(t);
    expect(wrapper.state().tagsString).toEqual(t.target.value);
  });

  it('stores file from input to state', () => {
    const InputComponent = wrapper.find('#file-chooser');
    const files = [firstPicture];

    InputComponent.simulate('change', { target: { files } });

    expect(wrapper.state().fileList).toEqual([firstPicture]);
  });

  it('button is disabled if no file is selected', () => {
    const ButtonComponent = wrapper.find(Button);

    expect(ButtonComponent.props().disabled).toEqual(true);
  });

  it('button is enabled if file is selected', () => {
    wrapper.setState({ fileList: [firstPicture] });
    const ButtonComponent = wrapper.find(Button);

    expect(ButtonComponent.props().disabled).toEqual(false);
  });

  it('successfully uploads to s3 with saveForm function', async () => {
    wrapper.setState({ fileList: [file], tagsString });

    const { name, type } = file;
    const id = `2017-12-10T06:00:00.000Z-${name}`;
    const tags = 'guinea pig&moomoo&fluffy';
    const headers = { headers: { 'x-amz-tagging': tags } };
    await wrapperInst.saveForm();

    expect(axios.post).toHaveBeenCalledWith('/upload', { id, type });
    expect(axios.put).toHaveBeenCalledWith('someUrl', file, headers);
    expect(axios.put).toHaveBeenCalledWith('/upload', { id });
  });

  it('unsuccessfully uploads to s3 with saveForm function', async () => {
    wrapper.setState({ fileList: [{ ...file, name: 'badId' }], tagsString });

    const { type } = file;
    const id = '2017-12-10T06:00:00.000Z-badId';
    await wrapperInst.saveForm();

    expect(axios.post).toHaveBeenCalledWith('/upload', { id, type });
  });
});
