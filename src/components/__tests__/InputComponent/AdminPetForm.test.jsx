import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';
import AdminPetForm from '../../InputComponent/AdminPetForm';

jest.mock('axios', () => ({
  post: jest.fn().mockReturnValue({ data: 'someUrl' }),
  put: jest.fn().mockReturnValue({ data: ['something'] }),
}));

describe('AdminPetForm', () => {
  const file = { name: 'moomoo', type: 'html/jpeg' };
  const tagArray = ['guinea pig', 'moomoo', 'fluffy'];
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
    const tagsString = 'guinea pig, moomoo, fluffy';
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

  it('sucessfully uploads to s3 with saveForm function', async () => {
    wrapper.setState({ fileList: [file], tagList: tagArray });
    const { name, type } = file;
    const tags = tagArray.map(tag => `${tag}&`).join('');
    const headers = { headers: { 'x-amz-tagging': tags } };
    await wrapperInst.saveForm();

    expect(axios.post).toHaveBeenCalledWith('/upload', { name, type, tags });
    expect(axios.put).toHaveBeenCalledWith('someUrl', file, headers);
  });
});
