import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log(6);
  return (
    <>
      <Navbar />
      <div className="flex flex-col container mx-auto py-8 px-4 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
