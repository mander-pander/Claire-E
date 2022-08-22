import styles from '../CSS/Home.module.css';
import claire from '../CSS/94245871_853002478499614_407991437506904.webp'
import Container from 'react-bootstrap/Container';


const Home = () => {

  return (
    <div className={styles.home}>
      <Container className={styles.content}>
        <div className={styles.textBox}>
          <h1>Claire Eckstein</h1>
          <h3> <i>Composer & Educator</i></h3>
        </div>
        <img src={claire} alt="Claire Eckstein" />
      </Container>
    </div>
  )
}

export default Home;
