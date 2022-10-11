
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <nav>
       <div className='flex justify-between p-7 bg-blue-900 font-bold '>
           <div className='text-2xl font-sans text-cyan-400'>
                      <p>Zayn Edu..</p>
           </div>
         <div className='text-2xl font-sans flex gap-7 text-cyan-400'>
            <Link to='/'>Topic</Link>
            <Link to='/static'>Statics</Link>
            <Link to='/blog'>Blog</Link>
         </div>
       </div>
       </nav>
      )

};

export default Header;