import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--yellow-500);
    font-size: 31px;
    letter-spacing: 1px;
    margin-top: 20px;
  }
  p {
    margin-top: 5px;
    font-size: 30px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    h1 {
      font-size: 51px;
      letter-spacing: 1px;
      margin-top: 20px;
    }
    p {
      display: none;
      margin-top: 5px;
      font-size: 25px;
      letter-spacing: 1px;
      font-weight: 500;
    }
  }
`;

export const Content = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 1300px;

  margin: 10px auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 0px;
  align-self: center;

  img {
    width: 50%;
    height: 410px;
    max-width: 100%;
  }
  p {
    text-align: center;
    display: flex;
    font-size: 24px;

    line-height: 40px;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 880px;
    height: 200px;
    font-size: 260px;
    text-align: center;
    color: #f2f2f2;
    opacity: 0.3;
  }
  .numeros {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
  }
  .textos {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  .numeros2 {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
    .h1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 880px;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
  }
  .textos2 {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  @media (max-width: 700px) {
    padding: 0px 20px;
    width: 100%;
    max-width: 100%;

    margin: 10px auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 2px;

    .imagens {
      display: flex;
      align-items: center;
      justify-content: center;

      /* margin-top: 250px; */
      width: 100%;
    }
    img {
      width: 70%;
      height: 460px;
      max-width: 100%;
    }
    p {
      text-align: center;
      display: flex;
      font-size: 35px;

      line-height: 50px;
      margin-top: 0px;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
    .numeros {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;

      position: absolute;
    }
    .textos {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 32px;
      }
    }
    .numeros2 {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;

      position: absolute;
      .h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 200px;
        font-size: 260px;
        text-align: center;
        color: #f2f2f2;
        opacity: 0.3;
      }
    }
    .textos2 {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 32px;
      }
    }
  }
`;
export const Content2 = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 1300px;

  margin: 10px auto;

  display: flex;
  display: none;
  align-items: center;
  justify-content: space-around;
  padding: 0px 0px;
  align-self: center;

  img {
    width: 70%;
    height: 460px;
    max-width: 100%;
  }
  p {
    text-align: center;
    display: flex;
    font-size: 24px;

    line-height: 40px;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 880px;
    height: 200px;
    font-size: 260px;
    text-align: center;
    color: #f2f2f2;
    opacity: 0.3;
  }
  .numeros {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
  }
  .textos {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  .numeros2 {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
    .h1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 880px;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
  }
  .textos2 {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  @media (max-width: 700px) {
    padding: 0px 20px;
    width: 100%;
    max-width: 100%;

    margin: 10px auto;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 2px;

    .imagens {
      display: flex;
      align-items: center;
      justify-content: center;

      /* margin-top: 250px; */
      width: 100%;
    }
    img {
      width: 80%;
      height: 480px;
      max-width: 100%;
    }
    p {
      text-align: center;
      display: flex;
      font-size: 35px;

      line-height: 50px;
      margin-top: 0px;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
    .numeros2 {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;

      position: absolute;
    }
    .textos3 {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 50px;
      }
    }
    .numeros2 {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;

      position: absolute;
      .h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 200px;
        font-size: 260px;
        text-align: center;
        color: #f2f2f2;
        opacity: 0.3;
      }
    }
    .textos2 {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 32px;
      }
    }
  }
`;
export const Content3 = styled.div`
  padding: 0px 20px;
  width: 100%;
  max-width: 1300px;

  margin: 10px auto;

  display: flex;

  align-items: center;
  justify-content: space-around;
  padding: 0px 0px;
  align-self: center;

  img {
    width: 50%;
    height: 410px;
    max-width: 100%;
  }
  p {
    text-align: center;
    display: flex;
    font-size: 24px;

    line-height: 40px;
    margin-top: 0px;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  h1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 880px;
    height: 200px;
    font-size: 260px;
    text-align: center;
    color: #f2f2f2;
    opacity: 0.3;
  }
  .numeros {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
  }
  .textos {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  .numeros2 {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1780px;
    margin: 0 auto;
    width: 100%;
    padding-left: 0px;
    display: flex;

    position: absolute;
    .h1 {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      width: 880px;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
  }
  .textos2 {
    display: flex;
    width: 100%;

    padding-left: 0px;
    max-width: 500px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    z-index: 3;

    h2 {
      margin-bottom: 1px;
      font-size: 32px;
    }
  }
  @media (max-width: 700px) {
    padding: 0px 20px;
    width: 100%;
    max-width: 100%;

    margin: 10px auto;
    flex-direction: column;
    display: flex;
    display: none;
    align-items: center;
    justify-content: space-between;
    padding: 50px 2px;

    .imagens {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: blue;
      /* margin-top: 250px; */
      width: 100%;
    }
    img {
      width: 50%;
      height: 410px;
      max-width: 100%;
    }
    p {
      text-align: center;
      display: flex;
      font-size: 35px;

      line-height: 40px;
      margin-top: 0px;
      align-items: center;
      justify-content: center;
      opacity: 1;
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: green;
      width: 100%;
      height: 200px;
      font-size: 260px;
      text-align: center;
      color: #f2f2f2;
      opacity: 0.3;
    }
    .numeros {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;
      background-color: yellow;
      position: absolute;
    }
    .textos {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 32px;
      }
    }
    .numeros2 {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 100%;
      margin: 0 auto;
      width: 100%;
      padding-left: 0px;
      display: flex;

      position: absolute;
      .h1 {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 200px;
        font-size: 260px;
        text-align: center;
        color: #f2f2f2;
        opacity: 0.3;
      }
    }
    .textos2 {
      display: flex;
      width: 100%;

      padding-left: 0px;
      max-width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 3;

      h2 {
        margin-bottom: 1px;
        font-size: 32px;
      }
    }
  }
`;
