import { HandsClapping, Trash } from 'phosphor-react';

import styles from './Comment.module.css';
import { fromNow } from '../utils/dates';

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

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/marcos-06.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Basso</strong>
              <time
                title={mockedDate.toLocaleString(browserLang, dateOptions)}
                dateTime={mockedDate}
              >
                Published {humanized}
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <HandsClapping /> Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
