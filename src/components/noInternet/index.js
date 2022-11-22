import React, { useEffect } from 'react';

const NoInternet = () => {
  useEffect(() => {
    document.title = 'The Lost CEO';
  });

  return <div></div>;
};

export default NoInternet;
