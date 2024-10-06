import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='py-5'>
      <div className='text-center font-light'>
        <p>&copy; {new Date().getFullYear()} MicroBiz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;