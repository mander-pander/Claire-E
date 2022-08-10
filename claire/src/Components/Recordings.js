import styles from '../CSS/Recordings.module.css';
import Container from 'react-bootstrap/Container';

const Recordings = () => {
  return (
    <div className={styles.page}>
        <h1>Recordings</h1>
          <Container className={styles.content}>
            <div>
              <h4>Pixelation (2018)</h4>
              <iframe
                width="500"
                height="300"
                src={`https://www.youtube.com/embed/tGapohHgSR0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Pixelation"
              />
            </div>

            <div>
              <h4>The Forest (2019)</h4>
              <iframe
                width="500"
                height="300"
                src={`https://www.youtube.com/embed/RPk3yM-4e-0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="The Forest"
              />
            </div>

            <div>
              <h4>Superhero (2020)</h4>
              <iframe
                width="500"
                height="300"
                src={`https://www.youtube.com/embed/uCrLVkA9G-k`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Pixelation"
              />
            </div>
          </Container>

    </div>
  )
}

export default Recordings;
