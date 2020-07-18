import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import { Link } from 'react-router-dom';

import Logo from './logo';
import SearchBarContainer from '../search_bar/search_bar_container';
//import SiteNav from './site_nav';
import SessionNav from './session_nav';
import UserNav from './user_nav';

class NavBar extends React.Component {
  //constructor(props) {
    //super(props);
  //}
    
  render() {
    let currentUser = this.props.currentUser;
    let logout = this.props.logout;
    let fetchUser = this.props.fetchUser;
    let fetchAllProducts = this.props.fetchAllProducts;
    
    let userSessionNav = this.props.currentUser ? (
      <UserNav currentUser={currentUser} 
               logout={logout} 
               fetchUser={fetchUser}
               fetchAllProducts={fetchAllProducts}/>
      ) : (
      <SessionNav openModal={this.props.openModal} 
                  clearErrors={this.props.clearErrors}/> );
    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="search-bar-container">
              <SearchBarContainer />
            </div>
            { userSessionNav }
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

{/* <SiteNav /> */}
export default NavBar;