import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap');
</style>;
const Home: NextPage = () => {
  return (
    <div>
      <body>
        <Mainimg src="./main.png" alt="메인 이미지" />
        <FontBox>
          <MainTitle>Hmm... </MainTitle>
          <MainTitle>What do you want? </MainTitle>
        </FontBox>
      </body>
    </div>
  );
};

const Mainimg = styled.img`
  position: float;
  float: left;
  height: 550px;
  margin-top: 5%;
`;
const FontBox = styled.div`
  position: absolute;
  right: 14%;
  top: 40%;
`;
const MainTitle = styled.p`
  font-family: "Shizuru", cursive;
  font-size: 90px;
  font-weight: 700;
  color: #171825;
  padding-left: 30px;
  text-shadow: 1px 1px 0 #eaeaea, -1px -1px 0 #232323;
  @media (max-width: 1200px) {
    font-size: 60px;
    color: #eee;
  }
`;
export default Home;
