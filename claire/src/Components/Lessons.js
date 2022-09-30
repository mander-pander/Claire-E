import styles from '../CSS/Lessons.module.css';
import Container from 'react-bootstrap/Container';
import Mailto from './Mail';

const Lessons = () => {

  return (
    <div className={styles.page}>
      <Container className={styles.content}>
        <h1>Lessons</h1>
          <p>
            Eckstein offers lessons for anybody wishing to increase their knowledge of music.
          </p>

          <p>
            In these lessons, Eckstein will provide knowledge about
            <ul>
              <li>
                composing your very own original piece (where your creativity can flow freely)
              </li>
              <li>
                how music theory actually works (why music sounds the way it does)
              </li>
              <li>
                arranging an existing piece (adding a new spin on an old song)
              </li>
            </ul>
          </p>

          <p>
            It does not matter what your skill level is. Whether you don’t know how to read music, or you have been a musician for many years and want to hone your skills, Eckstein is committed to help you reach your musical goals.
          </p>

          <p>
            Lessons will be $25 for a one hour session. Eckstein also offers a bulk pay discount; for a one hour lesson, once a week for four weeks, the price is $90. This is a 10% discount.
          </p>

          <p>
            The lessons will take place over Google Duo and will be online. If you live within 20 miles of Milan, Indiana, Eckstein is willing to travel to your home and give you in person lessons.
          </p>
          <span className={styles.notes}> &#119070; &#9833; &#9837; &#9834; </span>
          <p>
            If you are interested in lessons, either for yourself or your loved ones, please reach out to Eckstein at For any and all inquiries, kindly send an email to &nbsp;
              <Mailto email="claireecksteinmusic@gmail.com" subject="Lesson Inquiry" body="Please describe your request or what you might want more information on:">
                claireecksteinmusic@gmail.com
              </Mailto>
              .
          </p>
      </Container>
    </div>
  )
}

export default Lessons;
