import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "../../interfaces/index"

const Layout: React.FC<LayoutProps> = ({ children }) => {
 return (
  <div className='layout_class'>
   <Header />
   <main className="main_class min-h-screen">{children}</main>
   <Footer />
  </div>
 );
}

export default Layout;
