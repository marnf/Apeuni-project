import React, { useState, useEffect } from 'react';
import { CiCircleChevUp } from "react-icons/ci";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={{ 
            position: 'fixed', 
            bottom: '20px', 
            right: '20px', 
            color: 'white', 
        
          }}>
         <CiCircleChevUp  size={50}/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
