import React from 'react'
import NotFoundImage from '../assets/404.png';

const NotFound = () => {
  return (
    <div>
        <img src={NotFoundImage} alt="404 - Not Found" />
    </div>
  )
}

export default NotFound