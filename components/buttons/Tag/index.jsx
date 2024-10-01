import styles from "./style.module.scss";

export function Tag({ content, className, onClick }) {
  return (
    <div onClick={onClick} className={styles.tag}>
      <span className={className}>{content}</span>
    </div>
  );
}
