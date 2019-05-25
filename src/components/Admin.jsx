import React from 'react';
import AdminPetForm from './InputComponent/AdminPetForm';

class Admin extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="titleHeader">Adopt a pet today!</h1>
          <AdminPetForm />
        </div>
      </div>
    );
  }
}

export default Admin;
