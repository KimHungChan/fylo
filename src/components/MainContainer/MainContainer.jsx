import React from 'react';
import './MainContainer.scss';

import ButtonsComponent from '../ButtonsComponent/ButtonsComponent';
import StorageComponent from '../StorageComponent/StorgageComponent';

const MainContainer = () => {
  return (
    <div className='center main'>
      <div className='main-container center'>
        <ButtonsComponent></ButtonsComponent>
        <StorageComponent></StorageComponent>
      </div>
    </div>
  );
};

export default MainContainer;
