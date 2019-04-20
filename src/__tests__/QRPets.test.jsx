import React from 'react';
import ReactDOM from 'react-dom';
import QRPets from '../QRPets';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<QRPets />, div);
  ReactDOM.unmountComponentAtNode(div);
});
