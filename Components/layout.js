/* eslint-disable react/prop-types */
'use client'

import { useState, useEffect } from "react";



import Footer from './Footer';
import Header from "./Header";

export default function Layout({ children="" }) {
  const [toastMsg, setToastMsg] = useState("");
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  useEffect(() => {
    if (toastMsg.length) {
      setTimeout(() => {
        setToastMsg("");
      }, 2000);
    }
  }, [toastMsg]);

  return (
    <>
        <Header />
        <main className="space-y-12 md:space-y-6 lg:space-y-3 xl:space-y-0">
            {children}
        </main>
        <Footer />
    </>
  );
}