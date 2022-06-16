import { fromNow } from '../utils/dates';
import styles from './Post.module.css';

const mockedDate = new Date('Wed, 08 Jun 2022 11:31:31 GMT');
const browserLang = navigator.language;
const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};
const { humanized } = fromNow({ fromDate: mockedDate });

export const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/gusgalote.png" />
          <div className={styles.authorInfo}>
            <strong>Gustavo Galote</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time
          title={mockedDate.toLocaleString(browserLang, dateOptions)}
          dateTime={mockedDate}
        >
          Published {humanized}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave your comment here" />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>
    </article>
  );
};
