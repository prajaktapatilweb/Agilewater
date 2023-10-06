import React, {useEffect} from 'react';

export default function NewSearch() {
  useEffect(() => {
    const script = document.createElement('script');
    document.head.append(script);
    script.src = 'https://cse.google.com/cse.js?cx=754ae9cc9677b415d';
  }, []);

  return (
    <div className='App'>
      <div className='gcse-searchbox-only'></div>
    </div>
  );
}
