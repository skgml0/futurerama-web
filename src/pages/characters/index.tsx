import axios from 'axios'
import type { NextPage} from 'next'
import useSWR from 'swr';
import { CharacterData } from '../../types/characters';
import styled from '@emotion/styled';

const fetcher = (url: string) => axios(url).then((res) => res.data);
const CharacterIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/characters', fetcher);
    console.log(data);
    if (error) return <div>An error has occurred.</div>
    if (!data) return <div>Loading...</div>
   
    return (
        <Container>
            {data.map((character: CharacterData) => {
                const {  age, gender, homePlanet, id, images, name,
                    occupation, sayings, species} = character;
                return (
                    <Card key={`futurama-character-${id}`}>
                        <Profile src={images.main} alt="" />
                        <h1>{name.first} {name.middle} {name.last}</h1>
                        {/* <p>homePlanet: {homePlanet}</p>
                        <p>age: {age}</p>
                        <p>gender: {gender}</p> */}
                    </Card>
                )
        })}
        </Container>
    )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    background:#3989c7;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 360px;
    width: 360px;
    text-align: center;
    color: #dadab7;
    /* border: 1.5px solid #ffe; */
    /* border-radius: 10px; */
`
const Profile = styled.img`
    height: 200px;
    /* aspect-ratio: 9 / 16; */
    object-fit: contain;
    margin-top: 10px;
`
export default CharacterIndexPage;