import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

function getWindowDimensions() {
  const {innerWidth: width, innerHeight: height} = window;
  return {
    width,
    height,
  };
}
export default function UseWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}
