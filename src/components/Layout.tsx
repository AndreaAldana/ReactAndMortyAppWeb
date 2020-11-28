import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = (props: any) => {
   return (
      <div>
         <Navbar/>
            {props.children}
         <Footer/>
      </div>
   )
}

export default Layout;