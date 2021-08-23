import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
const Map = dynamic(() => import("../components/Maps"), { ssr: false });
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
  console.log(props.cases);
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
        <img src="/images/avatar.svg" alt="Covid imagem" />
      </main>
      <Map />
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
