import { Fragment, useState } from 'react';
import classes from './Form.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup , FormControl } from 'react-bootstrap';

const Form = props => {
  const[sent,setSent] = useState(false);
  const messageHandler =()=>{
      setSent(true);
  }
    return (
        <Fragment>
        {sent &&<p>Sent!!</p>}
            <div className={classes['footer']}>
            <div className={classes['footer-base']}>
                <section className={classes['sign-up-section']} className={classes['sign-up-section-elong']} >
                   <div className = {classes['sign-up-input']}>
                    <InputGroup className="mb-3" className={classes['sign-up-section']}>
                        
                            <FormControl
                             className={classes['text-input']}
                             placeholder="Email Address"
                             aria-label="Email"
                             aria-describedby="basic-addon1"/>
                             <InputGroup.Prepend className={classes['input-btn']}>
                            <InputGroup.Text id="basic-addon1" className={classes['input-btn']} onClick={messageHandler}>
                                <svg height="12" width="12" role="img" viewBox="0 0 50 50" className={classes['icon']}>
                                <g>
                                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
                                </g>
                                </svg>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                    </div>
                    <div className={classes['checkbox-module']}>
                        <p className={classes['c-module-p']}>Subscribe to receive communications from THE ELEMENTARY SCHOOL about our admission statuses and services. By subscribing, you confirm you have read and accept our privacy policy. </p>
                    </div>
                    <div className={classes['cancel-module']}>
                        <button onClick={props.onCancel} className={classes['cancel']}>Cancel</button>
                    </div>
                </section>
                </div>
            </div>
        </Fragment>
    );
};

export default Form;
