import { Fragment } from 'react';
import classes from './Footer.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { InputGroup , FormControl } from 'react-bootstrap';

const Footer = props => {

    return (
        <Fragment>
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
                            <InputGroup.Text id="basic-addon1" className={classes['input-btn']}>
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
                        <p className={classes['c-module-p']}>Subscribe to receive communications from THE ELEMENTARY SCHOOL about our admission statuses and services. By subscribing, you confirm you have read and accept our privacy policy.</p>
                    </div>
                </section>

                <section className={classes['footer-block1']}>
                    <h3 className={classes['footer-block1-heading']}>Orders and Support</h3>
                    <div className={classes['divider']}></div>
                    <ul className={classes['list']}>
                        <li className={classes['list-item']}>Contact us</li>
                        <li className={classes['list-item']}>FAQ's</li>
                        <li className={classes['list-item']}>Terms and Conditions</li>
                    </ul>
                </section>
                
                <section className={classes['footer-block1']}>
                    <h3 className={classes['footer-block1-heading']}>Services</h3>
                    <div className={classes['divider']}></div>
                    <ul className={classes['list']}>
                        <li className={classes['list-item']}>Best Teachers</li>
                        <li className={classes['list-item']}>Certified Courses</li>
                        <li className={classes['list-item']}>Parent Teacher Appointments</li>
                        
                    </ul>
                </section>
                <section className={classes['footer-block1']}>
                    <h3 className={classes['footer-block1-heading']}>Location</h3>
                    <div className={classes['divider']}></div>
                    <ul className={classes['list']}>
                        <li className={classes['list-item']}>Boston Street 43, near Plaza</li>
                        <li className={classes['list-item']}>Language:English</li>
                    </ul>
                </section>
                <section className={classes['sign-up-section']}>
                    <h3 className={classes['footer-block1-heading']}>Geeting in</h3>
                    <div className={classes['divider']}></div>
                    <p className={classes['c-module-p']}>
                   Success and Spirit in Our School. We Seek, We Strive, We Soar. School, Family, Community. Open the book to life. Rising to justice learning with joy building our future. Together Everyone Accomplishes More.
                    </p>
                </section>
                <section className={classes['footer-block1']}>
                    <h3 className={classes['footer-block1-heading']}>About</h3>
                    <div className={classes['divider']}></div>
                    <ul className={classes['list']}>
                        <li className={classes['list-item']}>Our Story</li>
                        <li className={classes['list-item']}>Foundation</li>
                        <li className={classes['list-item']}>Career</li>
                        <li className={classes['list-item']}>Privacy Policy</li>
                        <li className={classes['list-item']}>Accessablity</li>
                    </ul>
                </section>

                <section className={classes['footer-block1']} className={classes['tabs-hidden']}>
                    <h3 className={classes['footer-block1-heading']} className={classes['tabs-hidden']}>Social Media</h3>
                    <div className={classes['divider']}className={classes['tabs-hidden']}></div>
                    <ul className={classes['list']}>
                        <li className={classes['list-item']}>LinkedIn</li>
                        <li className={classes['list-item']}>Twitter</li>
                        <li className={classes['list-item']}>Instagram</li>
                        <li className={classes['list-item']}>We Chat</li>
                        <li className={classes['list-item']}>Weibo</li>
                    </ul>
                </section>
                
                </div>
                <div className={classes['footer-bottom-banner']}>
                    <span>THE ELEMENTARY SCHOOL</span>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
