import { FaRegSmile } from "react-icons/fa";
import styles from "./styles.module.scss";
export function PrecautionButton() {
  const isUserLoggendIn = false;
  return isUserLoggendIn ? (
    <button type="button" className={styles.precautionButton}>
      {" "}
      <FaRegSmile color="#04d361" />
      Precauções
    </button>
  ) : (
    <button type="button" className={styles.precautionButton}>
      {" "}
      <FaRegSmile color="#eba417" />
      Precauções
    </button>
  );
}
