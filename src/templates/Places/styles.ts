import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 10px;
  gap: 10px;
  width: 100%;
  margin-top: 10px;

  border-radius: 10px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  text-align: center;
  width: 500px;
  background-color: transparent;

  box-shadow: 0px 1px 3px 0px #000;
`;
export const Caixa = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

export const Heading = styled.h1`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 28px;
  span {
    font-size: 30px;
  }
`;
export const Paragrafo = styled.p`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  line-height: 30px;
  margin-top: 0px;
  .info {
    margin-top: 10px;
    color: var(--yellow-500);
  }
`;
export const Body = styled.div`
  p {
    font-size: 15px;
  }
`;
export const Gallery = styled.div`
  display: none;
  margin-top: var(--medium);

  img {
    border-radius: 0px 20 px 20px 0px;

    width: 400px;
    height: 250px;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`;
export const Caption = styled.p`
  display: none;
  font-size: var(--small);
  color: var(--grey);
  margin-bottom: var(--medium);
  a {
    font-size: var(--small);
  }
`;
