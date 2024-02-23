import PageTitle from '../Components/PageTitle';
import ProductMenuItem from '../Components/ProductMenuItem';
import Container from 'react-bootstrap/Container';

export default function MainPage() {

  return (
    <>
      <div className="App">
        <PageTitle
          titleOne="Our"
          titleTwo=" Products"
          text="Our products make the world safer" />
      </div>
      <Container style={{
                        display: 'flex',
                        flexDirection: 'row',
                        // minHeight: '100vh',
                    }}>
        <ProductMenuItem title="Turnstile"/><ProductMenuItem title="SpeedGate" /><ProductMenuItem title="SwingGate" />
      </Container>
    </>
  )
}

