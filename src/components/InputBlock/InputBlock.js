import styles from "./InputBlock.module.css";

export default function InputBlock (props) {
  return (
    <div className={styles.InputBlock}>
      <input className={styles.Input} onChange={props.inputOnChange}></input>
      <button className={styles.InputButton} onClick={props.buttonOnClick}>🔍︎</button>
    </div>
  );
}