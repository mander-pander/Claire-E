import styles from '../CSS/MusicCatalogue.module.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Mailto from './Mail';

const MusicCatalogue = () => {
  const [showSol, setShowSol] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [showClouds, setShowClouds] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.textContent}>
        <h1>Music Catalogue</h1>
        <p>
          All of the pieces listed in the music catalogue are available for purchase. To receive a digital download of sheet music, kindly send an email to&nbsp;
          <Mailto email="adgodsey@gmail.com" subject="Music Purchase" body="Please describe your request or what you might want more information on:">
            claireecksteinmusic@gmail.com
          </Mailto>
          &nbsp;and list which pieces you would like to purchase.
        </p>
      </div>

      <div className={styles.item}>
        <h4><b>Solace (2018)</b> <br></br>written for Flute, Oboe, and Piano</h4>
        <div className={styles.summary}>
        <audio src="./Midi_Files/Solace Midi Mockup.wav" controls type="audio/wav" />
          <p>
            Solace represents the false comfort one endures in making a decision to journey into unfamiliar territory. The memories of the road behind stay vivid only in their mind. There is beauty in not knowing what lies ahead, yet there is an inescapable fear that refuses to be silenced.
          </p>
          <p>
            This was Eckstein’s first piece that she wrote in college. Entering into a college atmosphere provided a big shift in Eckstein’s life, and this acted as a large inspiration for the piece.
          </p>
          <p>
            This piece is written in compound ternary form for flute, oboe, and piano. The structure is as follows: A, B (development), A’. Section A outlines the main theme and harmony. The flute takes the melody and the oboe takes much of the harmony. The piano also plays the harmony, but includes a dotted motive that fuels the piece forward. Later in section A, there is a harmonic shift that moves the piece into another modal area. Section B begins with a descending sequence in the piano, and returns to the harmonic area heard in the first section of A. The two woodwinds join, building off of material present in the A section. This is considered the developmental section. The piece ends with a varied form of the A section.
          </p>
          <p><b>Price: $25</b></p>
        </div>
        <img src="./PDF-Files/Solace_First_Page.png" className={styles.doc} onClick={() => setShowSol(true)}/>

        <Modal show={showSol} onHide={() => setShowSol(false)} animation={false} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Solace Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="./PDF-Files/Solace_First_Page.png" className={styles.modalDoc}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowSol(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

      <div className={styles.item}>
        <h4><b>After Hours (2019)</b> <br></br>written for Trumpet, Baritone, and Piano</h4>
        <div className={styles.summary}>
          <audio src="./Midi_Files/After Hours Midi Mockup.wav" controls type="audio/wav" />
          <p>
            After Hours represents the daily grind many of us experience in our lives. It is the feeling of endless opportunities when all the daily tasks have been completed, yet it also is the feeling of being too ‘drained’ to do what you would like to do.
          </p>
          <p>
            This piece was written at the height of Eckstein’s undergraduate academic career. Being swamped with classwork and exhausted, Eckstein decided to write a piece about these feelings.
          </p>
          <p>
            The piece is primarily in a minor mode; however, it occasionally shifts to major, but never fully. Throughout the piece, the trumpet and baritone exchange between playing the melody or harmony. They work in conjunction with one another, so that neither is overpowering the other.
          </p>
          <p>
            The piece is in the following form: A, B, C, D, B’, A’. Section A acts as an introduction. This is followed by section B, which is where we hear the main chorus of the piece. The chorus features several rhythmic motives of a dotted eighth to a sixteenth note. Section C is a continuation of the musical ideas present in sections A and B. Section D is where the piece fully modulates to A Major, only to shortly return to the minor mode of the second B section. The piece ends with an altered A section.
          </p>
          <p><b>Price: $20</b></p>
        </div>

        <img src="./PDF-Files/After_Hours_First_Page.png" className={styles.doc} onClick={() => setShowAfter(true)}/>

        <Modal show={showAfter} onHide={() => setShowAfter(false)} animation={false} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>After Hours Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="./PDF-Files/After_Hours_First_Page.png" className={styles.modalDoc}  />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAfter(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>

      <div className={styles.item}>
        <h4><b>Clouds of the Sky (2019)</b> <br></br>written for Flute, Oboe, and Piano</h4>
        <div className={styles.summary}>
          <audio src="./Midi_Files/Clouds of the Sky Midi Mockup.wav" controls type="audio/wav" />
          <p>
            Clouds of the Sky represents the various clouds found in the Earth’s troposphere. Cirrus, stratus and cumulus clouds are what we often see when looking into the sky, and to many of us, they give a sense of peace or wonderment as the sun pokes through them. This piece is intended to capture not only the ethereal quality of a sparsely clouded sky, but also, the rumbling aggression of thunderstorms.
          </p>
          <p>
            This piece is written for flute, oboe, and piano. The melodies within this piece rise and fall to create a feeling of ‘floating.’ The instruments work together to create a soundscape. The piano is the driving force, pushing the other instruments to strike.  This piece is written in arch form: A, B, C, B’, A’. The A sections are the beginning material, in which the other sections build off of. Sections labelled as B are the main choruses. Section C is an experimental area that is much more lyrical than the rest.
          </p>
          <p>
            Eckstein has always found inspiration from the sky. This was exasperated by the long distances she drove for her work and education. During these long drives, she found herself looking up at the clouds, and noticing the changes that the atmosphere endured every day. Watching these atmospheric changes were a large part of the inspiration for this piece.
          </p>
          <p><b>Price: $22</b></p>
        </div>

        <img src="./PDF-Files/Clouds_of_the_Sky_First_Page.png" className={styles.doc} onClick={() => setShowClouds(true)} />


        <Modal show={showClouds} onHide={() => setShowClouds(false)} animation={false} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Clouds of the Sky Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src="./PDF-Files/Clouds_of_the_Sky_First_Page.png" className={styles.modalDoc} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowClouds(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  )
}

export default MusicCatalogue;
