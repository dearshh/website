// function Header() {
//     return(
//         <>
//         <h1>dsa</h1>
//         </>
//     )
// }

// export default Header;

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Health & Wellness</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;