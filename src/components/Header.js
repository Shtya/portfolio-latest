import React from 'react';

const Header = () => {
  return (
  <header className='py-8 header' >
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
      <a><h2 className='logo'>Ahmed</h2></a>
      <a className='cv'   href="/img/cv.pdf" download="cv.pdf" >Download CV</a>

      </div>
    </div>

  </header>
  )
};

export default Header;
