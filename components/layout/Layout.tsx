import React from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LayoutProps } from "@/interfaces/index";

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
