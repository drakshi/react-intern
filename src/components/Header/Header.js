import { Fragment } from 'react';
import classes from './Header.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Form from './Form';

const Header = (props) => {

  const[showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
  }
   const cancelHandler = () => {
    setShowForm(false);
  }
  return (
    <Fragment>
      <header className={classes.header}>
       { showForm && <Form onCancel={cancelHandler}/>}
        { !showForm && <div onClick={showFormHandler} className={classes['register']}>Register Your child and talk to our counselor. Click here for contacting</div>}
        <svg  aria-labelledby="24c165d4-e43a-4e02-9387-96abad107d56" className={classes['modal-icon']} viewBox="0 0 50 50" role="img">
            <g>
                <polygon points="26.2,15.2 23.8,15.2 23.8,23.9 15,23.9 15,26.4 23.8,26.4 23.8,35.1 26.2,35.1 26.2,26.4 35,26.4 35,23.9 26.2,23.9 "></polygon>
            </g>
        </svg>
      </header>
      <Navbar  expand="lg" className={classes['toggle-icon']}>
  <Navbar.Toggle  className={classes['toggle-iconbar']}/>
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto">
      <Nav.Link href="#home" className={classes['nav']}>THE ELEMENTARY SCHOOL</Nav.Link>
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets" className={classes['nav']}  onClick={props.onShowCart}>Courses</Nav.Link>
      <Nav.Link href="#memes" className={classes['nav']}  onClick={props.onShowCart}>Teacher</Nav.Link>
      <Nav.Link href="#home" className={classes['nav']} onClick={props.onShowCart}>Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 

    </Fragment>
  );
};

export default Header;