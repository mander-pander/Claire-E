import styles from '../CSS/Composition.module.css';
import Container from 'react-bootstrap/Container';
import Mailto from './Mail';

const Composition = () => {

  return (
    <div className={styles.page}>
      <Container className={styles.content}>
        <h1>Composition</h1>
        <p>
          The commission fee will be calculated by what instrumentation you would like and how long you would like the piece to be.
          If you are a film or game studio, Eckstein will negotiate price with you based on how much music you require. Eckstein is more than willing to negotiate prices to allow you to stay on budget.
          Eckstein is committed to making sure your vision for the piece is realized, so if needed, she offers two revisions to the piece for free.
        </p>
        <span className={styles.notes}> &#119070; &#9833; &#9837; &#9834; </span>
        <p>
          <b>
            For any and all inquiries, kindly send an email to&nbsp;
            <Mailto email="claireecksteinmusic@gmail.com" subject="Composition Inquiry" body="Please describe your request or what you might want more information on:">
              claireecksteinmusic@gmail.com
            </Mailto>&nbsp;
            describing your request.
          </b>
        </p>
      </Container>
    </div>
  )
}

export default Composition;
