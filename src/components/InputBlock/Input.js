import styles from "./InputBlock.module.css";

export default function InputBlock (props) {
  return (
    <input className={styles.Input} onChange={props.inputOnChange}></input>
  );
}