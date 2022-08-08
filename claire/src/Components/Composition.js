import styles from '../CSS/Composition.module.css';
import Container from 'react-bootstrap/Container';

const Composition = () => {

  return (
    <div className={styles.page}>
      <Container className={styles.content}>
        <h1>Composition</h1>
          <p>
            The commission fee will be calculated by what instrumentation you would like and how long you would like the piece to be.
            If you are a film or game studio, Eckstein will negotiate price with you based on how much music you require. Eckstein is more than willing to negotiate prices to allow you to stay on budget.
            Any revisions are free, as Eckstein is focused on making sure your vision for the piece is realized.
          </p>
          <span className={styles.notes}> &#119070; &#9833; &#9834; &#9837;</span>
          <p>
            For any and all inquiries, kindly send an email to <u>claireecksteinmusic@gmail.com</u> describing your request.
          </p>
      </Container>
    </div>
  )
}

export default Composition;
