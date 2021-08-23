import styles from "./styles.module.scss";
import Link from "next/link";
export function EnterButton() {
  return (
    <Link href="/maps">
      <button type="button" className={styles.enterbutton}>
        Entrar
      </button>
    </Link>
  );
}
