import { HandsClapping, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import enUS from 'date-fns/esm/locale/en-US';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export const Comment = () => {
  const publishedAt = new Date('Wed, 08 Jun 2022 11:31:31 GMT');

  const isBrowserPtBr = navigator.language === 'pt-BR';
  const locale = isBrowserPtBr ? ptBR : enUS;

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: locale,
    }
  );
  const publishedDateFromNow = formatDistanceToNow(publishedAt, {
    locale: locale,
    addSuffix: true,
  });

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/marcos-06.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcos Basso</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateFromNow}
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
