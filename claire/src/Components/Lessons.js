import styles from '../CSS/Lessons.module.css';

const Lessons = () => {

  return (
    <div className={styles.page}>
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
            If you are interested in lessons, either for yourself or your loved ones, please reach out to Eckstein at claireecksteinmusic@gmail.com.
          </p>
    </div>
  )
}

export default Lessons;
