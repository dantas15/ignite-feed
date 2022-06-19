import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import enUS from 'date-fns/esm/locale/en-US';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState([]);

  const [newComment, setNewComment] = useState('');

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

  const handleCreateNewComment = () => {
    event.preventDefault();

    setComments([...comments, newComment]);

    setNewComment('');
  };

  const handleChangeNewComment = () => {
    setNewComment(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateFromNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          }
          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          value={newComment}
          onChange={handleChangeNewComment}
          placeholder="Leave your comment here"
        />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            deleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
