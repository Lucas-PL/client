import MainTitle from '../Components/MainTitle';
import ProductMenuItem from '../Components/ProductMenuItem';
import Container from 'react-bootstrap/Container';

import styles from '../Pages/Products.module.scss';

export default function MainPage() {

  return (
    <>
      <div className="App">
        <MainTitle
          titleOne="Our"
          titleTwo=" Products"
          text="Our products make the world safer" />
      </div>
      <Container className={styles.ProductsList}>
        <ProductMenuItem title="Turnstile" gate="ga2"/><ProductMenuItem title="SpeedGate" /><ProductMenuItem title="SwingGate" />
      </Container>
    </>
  )
}

