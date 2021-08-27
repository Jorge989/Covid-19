import { PrecautionButton } from "../PrecautionsButton";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo2.svg"
              alt="covid-image"
              height={10}
              width={40}
            />
          </a>
        </Link>
        <nav>
          <a className={styles.active}>Home</a>

          <a>Mapa</a>
        </nav>

        <PrecautionButton />
      </div>
    </header>
  );
}
