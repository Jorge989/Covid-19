import styles from "./styles.module.scss";
import Link from "next/link";
export default function EnterButton() {
  return (
    <div className={styles.Container}>
      <div className={styles.mapsWrapper}>
        <img src="/images/mapointer.svg" alt="covid-maps" />
      </div>
      <div className={styles.mapsContainer}>
        <img src="/images/g6.svg" alt="covid-maps" />
      </div>
    </div>
  );
}
