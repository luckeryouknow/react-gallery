import styles from "./InputBlock.module.css";

export default function InputButton (props) {
  return (
    <button className={styles.InputButton} onClick={props.buttonOnClick}>🔍︎</button>
  );
}