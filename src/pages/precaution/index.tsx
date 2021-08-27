import * as S from "./styles";
import Container from "./styles";
import Image from "next/image";
export default function Precaution() {
  return (
    <Container>
      <h1>Precauções</h1>
      <p>parar a propagação começa com você</p>
      <S.Content>
        <div className="textos">
          <h2>Use Mascara</h2>
          <p>
            As máscaras funcionam como
            <br /> uma barreira física para a liberação
            <br /> dessas gotículas no ar quando há tosse
            <br /> espirros e até mesmo durante conversas.
          </p>
        </div>
        <div className="numeros">
          {" "}
          <h1>01</h1>
        </div>
        <div className="imagens">
          {" "}
          <Image
            src="/images/mac.svg"
            alt="covid-image"
            height={370}
            width={350}
          />
        </div>
      </S.Content>
      <S.Content3>
        <div className="imagens">
          {" "}
          <Image
            src="/images/kids.svg"
            alt="covid-image"
            height={370}
            width={350}
          />
        </div>
        <div className="textos2">
          <h2>Lave as Mãos</h2>
          <p>
            Lavar As mãos é a forma mais simples e eficaz de evitar contágio e
            disseminação do vírus
          </p>
        </div>
        <div className="numeros2">
          {" "}
          <h1 className="h1">02</h1>
        </div>
      </S.Content3>
      <S.Content2>
        <div className="textos2">
          <h2>Lave as Mãos</h2>
          <p>
            Lavar As mãos é a forma mais simples e eficaz de evitar contágio e
            disseminação do vírus
          </p>
        </div>
        <div className="numeros2">
          {" "}
          <h1 className="h1">02</h1>
        </div>
        <div className="imagens">
          {" "}
          <Image
            src="/images/kids.svg"
            alt="covid-image"
            height={370}
            width={350}
          />
        </div>
      </S.Content2>
      <S.Content>
        <div className="textos">
          <h2>Distanciamento Social</h2>
          <p>
            O distanciamento social
            <br /> é uma das medidas mais importantes <br /> e eficazes para
            reduzir o avanço da
            <br /> pandemia da covid-19
          </p>
        </div>
        <div className="numeros">
          {" "}
          <h1>03</h1>
        </div>
        <div className="imagens">
          {" "}
          <Image
            src="/images/usemascara.svg"
            alt="covid-image"
            height={370}
            width={350}
          />
        </div>
      </S.Content>
    </Container>
  );
}
