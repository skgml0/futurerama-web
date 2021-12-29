import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import { InfoData } from "../../types/Info";
import styled from "@emotion/styled";
import Link from "next/link";

const fetcher = (url: string) => axios(url).then((res) => res.data);
const InfoIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/info",
    fetcher
  );
  console.log(data);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((info: InfoData) => {
        const { synopsis, yearsAired, creators, id } = info;

        return (
          <Card key={`futurama-info-${id}`}>
            <Mainimg
              src="http://pngimg.com/uploads/futurama/futurama_PNG90.png"
              alt=""
            />
            <Infotitle>Futurama x [{yearsAired}]</Infotitle>
            {creators.map((creator) => {
              return (
                <Link href={creator.url}>
                  <Author target="_blank">{creator.name}</Author>
                </Link>
              );
            })}
            
            <Story>{synopsis}</Story>
          </Card>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100%
  color: white;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* height: 100vh; */
  padding-top: 5%;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin: 0 5%;
`;
const Mainimg = styled.img`
  height: 300px;
`;
const Infotitle = styled.p`
  margin: 1%;
  font-weight: 800;
  font-size: 20px;
  color: #EEE;
  text-shadow: 0.5px 1px 0 #eaeaea, -2px -2px 0 #232323;
`
const Author = styled.a`
  cursor: pointer;
  font-weight: 500;
  color: #EEE;
  text-shadow: 0.5px 0.5px 0 #eaeaea, -1px -1px 0 #232323;
  margin: 0.5%;
`
const Story = styled.p`
  line-height: 1.7;
`;

export default InfoIndexPage;
