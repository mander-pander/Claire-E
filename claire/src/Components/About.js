import styles from '../CSS/About.module.css';
import claire from '../CSS/Claire2.webp';
import Container from 'react-bootstrap/Container';

const About = () => {

  return (
    <div className={styles.page}>
        <Container className={styles.content}>
          <img src={claire} alt="Claire Eckstein"/>
          <div className={styles.textContent}>
            <h1>Biography</h1>
            <p>
              Claire Eckstein (b. 1999) is an Indiana-based composer and educator who writes both acoustic and electronic music. She knew from a young age that she loved music, and began music theory and composition classes at the age of fourteen. After achieving the John Philip Sousa Band Award for her accomplishments in highschool, Eckstein moved on to complete her Bachelor of Arts in Humanities - Music with Honors at Indiana University East. Achieving either the Dean’s List or the Chancellor’s List distinction every semester of her college education, Eckstein was one of the top graduating students in her program. After she graduated, Eckstein began sharing her knowledge with aspiring musicians.

              Eckstein’s composition instructors include Chad Powers, Jason Jedlicka, and Nathan Froebe. Additional music instructors include Jessica Raposo, Peter Douglas and Danielle Cozart Steele. A large number of Eckstein’s works have been performed live regionally.
            </p>
          </div>
        </Container>
    </div>
  )
}

export default About;
