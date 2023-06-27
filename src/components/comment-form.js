import styles from './comment-form.module.css';

const CommentForm = () => (
  <div>
    <textarea className={styles.textarea} />
    <button className={styles.button}>add comment</button>
  </div>
);

export default CommentForm;
