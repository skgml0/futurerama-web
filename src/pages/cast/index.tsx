import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import { CastData } from "../../types/cast";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);
const CastIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/cast",
    fetcher
  );
  console.log(data);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Container>
      {data.map((cast: CastData) => {
        const { name, born, id } = cast;
        return (
          <Card key={`futurama-cast-${id}`}>
            {/* <Profile src={images.main} alt="" /> */}
            {/* <Person src= {imgArr[id-1]} alt="" /> */}
            <p>{name}</p>
            <p>{born}</p>
          </Card>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  background: #3989c7;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 300px;
  width: 360px;
  text-align: center;
  background-color: #f7f7c9;
  color: #919178;
  border: 1.5px solid #ffe;
  border-radius: 170px;
  margin-top: 5%;
`;
const Person = styled.img`
  height: 200px;
  /* aspect-ratio: 9 / 16; */
  object-fit: contain;
  border: 2px solid #c9c0c0;
  border-radius: 25%;
  margin-top: 10px;
`;
export default CastIndexPage;
