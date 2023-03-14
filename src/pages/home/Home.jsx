import React from 'react';
import './home.css'; // Import your CSS file here

import HeaderNew from '../../components/HeaderNew/HeaderNew';
import Splash from '../../components/splash/Splash';
import RecentlyAdded from '../../components/RecentlyAdded/RecentlyAdded';

const ParallaxImage = () => {
  const handleScroll = () => {
    const parallax = document.querySelector('.parallax-image');
    const scrolled = window.pageYOffset;
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="parallax-image">
          <HeaderNew />
          <Splash />
          <RecentlyAdded />
    </div>


    </>
    
  );
};

export default ParallaxImage;