import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import LinkWrapper from "../../components/LinkWrapper";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import * as S from "./styles";

export type PageTemplateProps = {
  all: {
    cases: string;
    deaths: string;
    recovered: string;
  };
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body, all }: PageTemplateProps) => {
  const data = {
    labels: ["Casos", "Mortes", "Curas"],
    datasets: [
      {
        data: [Number(all.cases), Number(all.deaths), Number(all.recovered)],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <S.Content>
      <LinkWrapper href="/maps">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <div className="grafico">
        <h2>Grafíco Covid-19</h2>
        <Doughnut data={data} width={380} height={380} />
      </div>
    </S.Content>
  );
};

export default PageTemplate;
