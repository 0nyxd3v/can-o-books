import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav-container'>
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      
        <Navbar.Brand className='footer-style'>Monica Ramirez</Navbar.Brand>
        <div class="circle"></div>
        <Navbar.Brand className='footer-style2'>Nerissa Leynes</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
