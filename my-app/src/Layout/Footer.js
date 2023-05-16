import react from 'react';
import { Container } from 'react-bootstrap';
import imageSrc from './Pages/logo.png';

const Footer = () => {
  return(
    <footer>
      <Container>
        <div style={{textAlign:'center'}}>
          Call: 010-9138-2790
          Address: 서울특별시 노원구 동일로214길 32(한국성서대학교)
          <img src={imageSrc} alt="My image" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;