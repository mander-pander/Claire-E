import styles from '../CSS/Contact.module.css';
import Container from 'react-bootstrap/Container';
import Mailto from './Mail';

const Contact = () => {

  return (
    <div className={styles.page}>
      <Container className={styles.content}>
        <h1>Contact</h1>
        <p>
          If you are interested in performing a work of Claire Eckstein’s, either one currently available or an original commission, you can contact her at &nbsp;
          <br></br>
          <br></br>
          <Mailto email="claireecksteinmusic@gmail.com" subject="Composition Inquiry" body="Please describe your request or what you might want more information on:">
                claireecksteinmusic@gmail.com
          </Mailto>.
          <br></br>
          <br></br>
          Similarly, if you are interested in using one of the digital recordings for commercial or educational purposes, please don’t hesitate to reach out.
        </p>
        <span className={styles.notes}> &#119070; &#9833; &#9837; &#9834; </span>
      </Container>
    </div>
  )
}

export default Contact;
