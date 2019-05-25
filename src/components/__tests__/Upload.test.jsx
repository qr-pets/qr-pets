// import React from 'react';
// import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';
// import axios from 'axios';
// import Upload from '../Upload';


// jest.mock('axios', () => ({
//   post: jest.fn().mockReturnValue('someUrl'),
//   put: jest.fn().mockReturnValue({ data: ['something'] }),
// }));

// describe('Upload', () => {
//   const firstPicture = { name: 'frodo', type: 'html/jpeg' };
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<Upload />);
//   });

//   it('renders as expected', () => {
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
//   it('stores file from input to state', () => {
//     const InputComponent = wrapper.find(Input);
//     const event = {
//       target: {
//         files: [firstPicture],
//       },
//     };

//     InputComponent.simulate('change', event);

//     expect(wrapper.state().fileList).toEqual([firstPicture]);
//   });
//   it('button is disabled if no file is selected', () => {
//     const ButtonComponent = wrapper.find(Button);

//     expect(ButtonComponent.props().disabled).toEqual(true);
//   });
//   it('button is enabled if file is selected', () => {
//     wrapper.setState({ fileList: [firstPicture] });
//     const ButtonComponent = wrapper.find(Button);

//     expect(ButtonComponent.props().disabled).toEqual(false);
//   });
//   it('clicking on button calls upload picture function', () => {
//     const uploadPictureSpy = jest.fn();

//     wrapper.setState({ fileList: [firstPicture] });
//     wrapper.instance().uploadPicture = uploadPictureSpy;
//     wrapper.instance().forceUpdate();

//     const ButtonComponent = wrapper.find(Button);
//     ButtonComponent.simulate('click');

//     expect(uploadPictureSpy).toHaveBeenCalledTimes(1);
//   });
//   it('uploadPicture sucessfully uploads to s3', async () => {
//     wrapper.setState({ fileList: [firstPicture] });

//     await wrapper.instance().uploadPicture();

//     expect(axios.post).toHaveBeenCalledWith('/upload', firstPicture);
//     expect(axios.put).toHaveBeenCalledWith('someUrl', firstPicture);
//   });
// });
