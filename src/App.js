import { Fragment } from 'react';
import Header from '../src/components/Header/Header';

import LoginModal from '../src/components/Header/LoginModal';
import { useState } from 'react';
import Product2 from './components/Product/Product2';

import Footer from './components/Footer/Footer';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
     {cartIsShown && <LoginModal onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      
      <Product2 />
      
      <Footer />
    </Fragment>
  );
}

export default App;
