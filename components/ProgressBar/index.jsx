import styles from "./style.module.scss";

const ProgressBar = ({ progress }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressTail} style={{ width: `${progress}%` }}></div>
      <div className={styles.progressHead}></div>
    </div>
  );
};



export default ProgressBar;
