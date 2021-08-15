import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './LoginModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
          <div className={classes['login-form']}>
          <h1 className={classes['modal-title']}>CONTACT</h1>
          <p className={classes['modal-subtitle']}>Our counselors will contact you soon.</p>
          <div className={classes['form-row']}>
              <div className={classes['form-text']}>
                  <label>
                      <input aria-required="true" class="FormText-input" name="number" placeholder="Phone number" type="number"></input>
                  </label>
                  <label>
                      <input aria-required="true" class="FormText-input" name="name" placeholder="Your ward's name" type="name"></input>
                  </label>
              </div>
          </div>
          <button type = "submit" className={classes['add-to-cart']} onClick={props.onClose} >Continue</button>
          </div>
          
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const LoginModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} >{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default LoginModal;