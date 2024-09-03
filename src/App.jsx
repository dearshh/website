// import './App.css'
// import Header from './components/Header'

// function App() {

//   return (
//     <>
//     <Header/>
//     </>
//   )
// }

// export default App

import React from 'react';
// import healthImage from './assets/k.jpeg';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;