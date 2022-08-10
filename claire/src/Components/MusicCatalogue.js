import styles from '../CSS/MusicCatalogue.module.css';
import { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.js';

const MusicCatologue = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className={styles.page}>
      <div className={styles.textContent}>
        <h1>Music Catalog</h1>
        <p>
          All of the pieces listed in the music catalog are available for purchase. To receive a digital download of sheet music, kindly send an email to claireecksteinmusic@gmail.com and list which pieces you would like to purchase.
        </p>
      </div>

      <div className={styles.item}>
        <h4><b>Solace (2018)</b> <br></br>written for Flute, Oboe, and Piano.</h4>
        <Document
          file="./PDF-Files/Solace_First_Page.pdf"
          onLoadSuccess={onDocumentLoadSuccess}

        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>

      <div className={styles.item}>
        <h4><b>After Hours (2019)</b> <br></br>written for Trumpet, Baritone, and Piano.</h4>
        <Document
          file="./PDF-Files/After_Hours_First_Page .pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>

      <div className={styles.item}>
        <h4><b>Clouds of the Sky (2019)</b> <br></br>written for Flute, Oboe, and Piano.</h4>
        <Document
          file="./PDF-Files/Clouds_of_the_Sky_First_Page.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  )
}

export default MusicCatologue;
