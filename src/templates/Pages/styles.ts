import styled from "styled-components";

export const Content = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 75vh;
  width: 100%;
  max-width: 100%;
  padding-top: 0px;
  margin: auto;
  .grafico {
    h2 {
      font-size: 35px;
      color: var(--yellow-500);
      margin-bottom: 40px;
    }

    height: 70vh;
  }
`;
export const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;
export const Body = styled.div`
  font-size: 25px;
  line-height: 22px;
  color: #fff;
`;
