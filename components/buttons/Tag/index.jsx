import styles from "./style.module.scss";

export function Tag({ content, className }) {
  return (
    <div className={styles.tag}>
      <span className={className}>{content}</span>
    </div>
  );
}
