import { FaRegSmile } from "react-icons/fa";
import styles from "./styles.module.scss";
import Link from "next/link";
export function PrecautionButton() {
  const isUserLoggendIn = false;
  return isUserLoggendIn ? (
    <Link href="/precaution" passHref>
      <button type="button" className={styles.precautionButton}>
        {" "}
        <FaRegSmile color="#04d361" />
        Precauções
      </button>
    </Link>
  ) : (
    <Link href="/precaution" passHref>
      <button type="button" className={styles.precautionButton}>
        {" "}
        <FaRegSmile color="#eba417" />
        Precauções
      </button>
    </Link>
  );
}
