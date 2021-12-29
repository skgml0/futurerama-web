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
            <E_Title>{name}</E_Title>
            <Born>{born}</Born>
          </Card>
        );
      })}
    </Container>
  );
};
export default CastIndexPage;

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
  height: 100px;
  width: 360px;
  text-align: center;
  background-color: #f7f7c9;
  color: #919178;
  border: 1.5px solid #ffe;
  border-radius: 170px;
  margin-top: 10%;
`;

const E_Title = styled.h2`
    font-size: 22px;
    color: black;
    font-weight: 600;
    margin: 5%;
`
const Born = styled.p`
    font-size: 16px;
    color: #464242;
    margin-bottom: 5%;
`

