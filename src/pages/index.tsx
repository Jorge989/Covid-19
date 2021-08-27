import { GetServerSideProps } from "next";

import Head from "next/head";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import { EnterButton } from "../components/EnterButton";
import styles from "./home.module.scss";

import { api } from "../services/api";
export const getAllUsers = async () => {
  const users = await api.get("all").then(({ data }) => {
    return data;
  });
  return users;
};
export default function Home(props) {
  return (
    <>
      <Head>
        <title>Início | Covid</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🦠 Corona Virus Pandemic</span>
          <h1>
            Fique em casa <span>Fique seguro.</span>
          </h1>
          <p>
            O novo coronavírus de 2019 [2019-nCov] oficialmente denominada
            pandemia de COVID-19 pela OMS, se espalhou por mais de 180 países
            total de casos no mundo <span>{props.cases}</span>
          </p>

          <EnterButton />
        </section>
        <Image
          src="/images/avatar.svg"
          alt="Covid imagem"
          width={100}
          height={100}
        />
      </main>
      <section className={styles.sintomas}>
        <div className={styles.sintomasDiv}>
          <div className={styles.sintomasBox}>
            <h1>
              quais são os principais <br /> <span>sintomas ?</span>
            </h1>
            <p>
              O vírus COVID-19 afeta pessoas diferentes de maneiras diferentes
              <br />
              COVID-19 é uma doença respiratória.
            </p>
            <div className={styles.lista}>
              <div>
                {" "}
                <ul>
                  <li>Febre</li>
                  <li>Cansaço</li>
                  <li>Tosse seca</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>Falta de ar</li>
                  <li>Dores</li>
                  <li>Dor de garganta</li>
                </ul>
              </div>
            </div>
          </div>

          <Image
            src="/images/temperatura.svg"
            alt="Covid imagem"
            className="imageSintomas"
            width={380}
            height={380}
          />
        </div>
      </section>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const allInfos = await getAllUsers();
  return {
    props: {
      allInfos,
      cases: allInfos.cases,
    },
  };
};
