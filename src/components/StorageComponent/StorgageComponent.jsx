import React from 'react';
import './StorageComponent.scss';
const StorgageComponent = () => {
  return (
    <div className='storage-container'>
      <div className='speech-bubble'>
        <span>
          <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>185 </span>
          <span
            style={{
              position: 'absolute',
              top: '45%',
              marginLeft: '0.7rem',
            }}
          >
            GB LEFT
          </span>
        </span>
      </div>
      <div className='inner-info-container'>
        <p className='storage-text'>
          You have used <span style={{ fontWeight: 'bold' }}>815 GB</span> of
          your storage
        </p>
        <div className='storage-bar'>
          <div className='storage-bar-inner'>
            <div className='dot'></div>
          </div>
        </div>
        <div className='limit-container'>
          <p>0 GB</p>
          <p>1000GB</p>
        </div>
      </div>
    </div>
  );
};

export default StorgageComponent;
