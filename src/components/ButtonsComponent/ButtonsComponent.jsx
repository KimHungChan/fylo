import React from 'react';
import './ButtonsComponent.scss';
import logo from '../../resources/logo.svg';

const ButtonsComponent = () => {
  return (
    <div className='buttons-container'>
      <img className='fylo-image' src={logo} alt='Flyo Logo'></img>
      <div className='button-container'>
        <button className='new-button'></button>
        <button className='files-button'></button>
        <button className='upload-button'></button>
      </div>
    </div>
  );
};

export default ButtonsComponent;