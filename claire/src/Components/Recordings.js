import styles from '../CSS/Recordings.module.css';
import Container from 'react-bootstrap/Container';

const Recordings = () => {
  return (
    <div className={styles.page}>
        <h1>Recordings</h1>
          <Container>
            <div className={styles.video}>
                <h4>Pixelation</h4>
                <div className={styles.summary}>

                  <p>
                  <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/tGapohHgSR0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Pixelation"
                  />

                    Pixelation (2018) is a collection of short pieces. These pieces are electronically synthesized, and are heavily inspired by the music written for the Moog. Eckstein wrote these pieces in an attempt to learn more about these traditional wave shapes, and how they can be manipulated. Not only this, but also to learn about how these shapes interact with each other in various ways.
                    <br></br>
                    <br></br>
                    Pixelation is composed primarily of the main waveshapes: sine, square, triangle and sawtooth. Each waveshape gives a different sound. For instance, the sine wave has a smooth sound, whereas the sawtooth has a very rough sound. By using these different waveshapes, the piece has more depth. Through this experimentation, Pixelation features four contrasting sections and the different waves are each tasked with taking the melody, while the other waves will take the harmony. This gives each section, and each wave, the chance to be heard.
                  </p>
                </div>
            </div>

            <div className={styles.video}>
                <h4>The Forest</h4>
                <div className={styles.summary}>

                <p>
                  <iframe
                      width="300"
                      height="200"
                      src={`https://www.youtube.com/embed/RPk3yM-4e-0`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="The Forest"
                    />
                  The Forest (2019) was a commissioned piece by Table24 gaming studios for their upcoming adventure game. The piece is intended to create a soundscape for a dark, magical forest. Full of skeletons and spirits, the hero must make their way through the overgrown trees.
                  <br></br>
                  <br></br>
                  This piece is electronically synthesized. There are three main driving forces within the piece; the lower melody, and the two upper melodies. These melodies are combined together to create a ‘dizzying’ atmosphere. The guitar synth plays the same bass line melody throughout the piece. The first upper melody is a motive and a run, followed by elongated notes. This motive is played by all of the upper voices at different times throughout the piece.  The second melody is a more elongated version of the motive. It is intended to float above the first melody.
                </p>
              </div>
            </div>

            <div className={styles.video}>
                <h4>Superhero</h4>
                <div className={styles.summary}>

                  <p>
                  <iframe
                    width="300"
                    height="200"
                    src={`https://www.youtube.com/embed/uCrLVkA9G-k`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Pixelation"
                  />
                    Whether it is the unfortunate death of their family members, or they arrived from a foreign planet to save Earth, every superhero has an origin story. Superhero (2020) tells the tale of just that: a superhero becoming who they were destined to be. However, instead of other grandiose superheroes, this piece tells the story of a victim of a turbulent childhood and child abuse.
                  </p>
                  <p>
                    Eckstein chose this theme because she believes it is an important topic that warrants more discussion. Nearly 700,000 children are abused in the U.S. annually. Eckstein states, “it is vital that we break the cycle of abuse, and let these children know that they are their own superheroes.”
                  </p>
                  <p>
                    This piece is electronically synthesized, with a vast amount of timbres. The timbres are frequently changing throughout the piece, to symbolize the emotional change in the narrator.
                  </p>
                  <p>
                    The piece consists of four movements, and they are played consecutively. Each section is intended to build off of the last. The melodies change slightly throughout the piece, both in mode and mood, but are all variations of the main melody. The main melody that we hear in the first section is reintroduced in the last section. This symbolizes the story coming ‘full-circle.’
                  </p>
                  <p>
                    The first movement has very gentle synths, and a synthetic music box. This is intended to symbolize the ‘dreaminess’ of childhood. At the end of the first movement is a subsection that breaks away from the original driving theme. This is intended to symbolize the loss of childhood. The second movement begins with a racing motive, still with the gentle synths. A harsher synth begins to sound in the background, symbolizing the anxiety and self doubt that the narrator feels. A heart beat motive sounds, with a collapse of the rough synth. This leads us into the third movement, where the anxiety and self doubt begin to take the narrator over. The fourth movement brings a return to the gentle synths, as the narrator begins to heal. Introduced are light choir synths and a cello synth. This is intended to create an ethereal ambiance.
                  </p>
                  <p>
                    Are you a victim or suspect a child is a victim near you?

                    National Child Abuse Hotline: (1-800) 422-4453

                    Child Protective Services Hotline: (1-800) 800-5556
                  </p>
              </div>
            </div>
          </Container>
    </div>
  )
}

export default Recordings;
