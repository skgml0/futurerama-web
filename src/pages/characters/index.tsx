import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import { CharacterData } from "../../types/characters";
import styled from "@emotion/styled";

const fetcher = (url: string) => axios(url).then((res) => res.data);
const CharacterIndexPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/characters",
    fetcher
  );
  console.log(data);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {data.map((character: CharacterData) => {
        const {
          age,
          gender,
          homePlanet,
          id,
          images,
          name,
          occupation,
          sayings,
          species,
        } = character;
        return (
          <Card key={`futurama-character-${id}`}>
            <Profile src={images.main} alt="" />
            <Name>
              {name.first} {name.middle} {name.last} ({age})
            </Name>
            <Planet>{homePlanet || "unknown"}</Planet>
            <Occupation> {occupation || "unknown"}</Occupation>
          </Card>
        );
      })}
    </Container>
  );
};
export default CharacterIndexPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  justify-content: space-between;
  align-items: center;

  margin: 7% 0;

  @media screen and (min-width: 650px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 650px) {
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
  color: #dadab7;
  
  /* background-color: purple; */
  margin: 0 5% 5% 0;
  /* border: 1.5px solid #ffe; */
  /* border-radius: 10px; */
`;
const Profile = styled.img`
  height: 200px;
  /* aspect-ratio: 9 / 16; */
  object-fit: contain;
  margin-top: 10px;
`;
const Name = styled.p`
  background-color: #e7e774;
  font-size: 20px;
  margin-top: 10px;
  font-weight: 700;
  border-radius: 12%;
  color: black;
`;

const Planet = styled.span`
  border-bottom: 2px solid #e7e774;
  line-height: 20px;
  color: #f2f7b8;
`;
const Occupation = styled.span`
  /* border-bottom: 2px solid green; */
  line-height: 20px;
  width: 70%;
  color: #f2f7b8;
  border-radius: 45%;
`;
