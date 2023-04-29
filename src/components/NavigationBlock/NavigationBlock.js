import styles from "./NavigationBlock.module.css";

export default function NavigationBlock (props) {
  return (
    <div className={styles.NavigationBlock}>
      <button className={styles.Button} onClick={props.previousButtonOnClick}>❮</button>
      <button className={styles.Button} onClick={props.nextButtonOnClick}>❯</button>
    </div>
  );
}