import 'bootstrap/dist/css/bootstrap.css';
import { Fragment } from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import image from '../assets/happy.jpg';
import classes from './Product2.module.css';

const Product2 = props => {
    return (
        <Fragment>
            
           <div className={classes['media-content']}>
               <div className={classes['image-module']}>
                   <img src = {image} className={classes['picture']}></img>
               </div>
               <div className={classes['content-module']}>
                   <div className={classes['content-module-inner']}>
                       <header className={classes['header-module']}>
                           <h3 className={classes['section-heading']}>WHAT IS OUR SCHOOL</h3>
                           <h2 className={classes['heading']}>Success and Spirit in Our School. We Seek, We Strive, We Soar. School, Family, Community. Open the book to life. Rising to justice learning with joy building our future. Together Everyone Accomplishes More. </h2>
                       </header>
                       <div className={classes['part-dl']}>
                       <dl  className={classes['part-dl-dl']} >
            <dt >Special Education</dt>
            <dd>Research that benifits our children</dd>
            
            <dt>Certifications</dt>
            <dd>Program for educators</dd>

            <dt>Books and Libraries</dt>
            <dd>Dynamic Classrooms and perfect study env</dd>

        </dl>
        </div>
                       </div>
                   </div>
               </div>
          
        </Fragment>
    )
}

export default Product2;