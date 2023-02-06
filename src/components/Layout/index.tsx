import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
        <main id="page" className="s-pagewrap">
            <Header />

            <section id="content" className="s-content">
                {children}
            </section>

            <Footer />
        </main>
    </>
  )
}

export default Layout