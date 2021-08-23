import { PrecautionButton } from "../PrecautionsButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo2.svg" alt="covid-image" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Precauções</a>
          <a>Posts</a>
        </nav>
        <PrecautionButton />
      </div>
    </header>
  );
}
