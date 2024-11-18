import React from 'react';
import Subfashion from './Subfashion';
import { Images } from '../Pics/Images';

const Fashion = () => {
  return (
    <div>
      <div className='fcon'>
        <div className='stpic1'>
          <img src={Images.style} className='styimg' alt='fashion' loading='lazy' />
          <h1>"Rev up your style: Dress like you drive, bold and unapologetic."</h1>
        </div>
        <div className='subfashion'>
          <Subfashion />
        </div>
      </div>
    </div>
  );
};

export default Fashion;
