import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import AdminPetForm from '../../InputComponent/AdminPetForm';

jest.mock('axios', () => ({
  post: jest.fn().mockReturnValue({ data: 'someUrl' }),
  put: jest.fn().mockReturnValue({ data: ['something'] }),
}));

describe('AdminPetForm', () => {
  const file = { name: 'moomoo', type: 'html/jpeg' };
  const tagArray = ['guinea pig', 'moomoo', 'fluffy'];
  const firstPicture = { name: 'frodo', type: 'html/jpeg' };
  let wrapper;
  let wrapperInst;

  beforeEach(() => {
    wrapper = shallow(<AdminPetForm />);
    wrapperInst = wrapper.instance();
  });

  it('renders as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('setState {image list, hasChanged} on handlefileSelect', () => {
    const img = [file];
    const fileSelectSpy = jest.spyOn(wrapperInst, 'handleFileSelect');
    wrapperInst.handleFileSelect(img);
    expect(fileSelectSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().fileList).toEqual(img);
    expect(wrapper.state().hasChanged).toEqual(true);
  });

  it('setState {tagList, hasChanged} on handleTagsUpdate', () => {
    const tagsString = 'guinea pig, moomoo, fluffy,';
    const tagsState = ['guinea pig', 'moomoo', 'fluffy'];
    const tagsUpdateSpy = jest.spyOn(wrapperInst, 'handleTagsUpdate');
    wrapperInst.handleTagsUpdate(tagsString);
    expect(tagsUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().tagList).toEqual(tagsState);
    expect(wrapper.state().hasChanged).toEqual(true);
  });

  it('setState {hasChanged} on handleTextChange', () => {
    const textUpdateSpy = jest.spyOn(wrapperInst, 'handleTextChange');
    wrapperInst.handleTextChange(true);
    expect(textUpdateSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.state().hasChanged).toEqual(true);
  });

  it('stores file from input to state', () => {
    const InputComponent = wrapper.find('#file-chooser');
    const files = [firstPicture];

    InputComponent.simulate('change', files);

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

  it('sucessfully uploads to s3 with saveForm function', async () => {
    wrapper.setState({ fileList: [file], tagList: tagArray });
    const { name, type } = file;
    // const tags = tagArray.map(tag => `${tag}&`).join('');
    const tags = 'guinea pig&moomoo&fluffy';
    const headers = { headers: { 'x-amz-tagging': tags } };
    await wrapperInst.saveForm();

    expect(axios.post).toHaveBeenCalledWith('/upload', { name, type });
    expect(axios.put).toHaveBeenCalledWith('someUrl', file, headers);
  });
});
