import styles from "./styles.module.scss";
import Link from "next/link";
export function EnterButton() {
  return (
    <Link href="/maps" passHref>
      <button type="button" className={styles.enterbutton}>
        Casos pelo mundo
      </button>
    </Link>
  );
}
