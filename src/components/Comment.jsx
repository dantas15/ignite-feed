import { useState } from 'react';
import { HandsClapping, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import enUS from 'date-fns/esm/locale/en-US';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export const Comment = ({ content, onDeleteComment }) => {
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

  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount((prevState) => prevState + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gusgalote.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gustavo</strong>
              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateFromNow}
              </time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping /> Applaud <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
