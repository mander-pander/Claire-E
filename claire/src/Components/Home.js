import Container from 'react-bootstrap/Container';
import styles from '../CSS/Home.module.css';


const Home = () => {

  return (
    <div className={styles.home}>
      <Container className={styles.textBox}>
        <h1>Claire Eckstein</h1>
        <h3> <i>Composer & Educator</i></h3>
      </Container>
    </div>
  )
}

export default Home;
