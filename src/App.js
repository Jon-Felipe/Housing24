import React from 'react';

// screens
import Home from './pages/Home';

// components
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className='full-page'>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
