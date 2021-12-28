import axios from 'axios'
import type { NextPage} from 'next'
import useSWR from 'swr';
import { EpisodesData } from '../../types/episodes';
import styled from '@emotion/styled';

const fetcher = (url: string) => axios(url).then((res) => res.data);
const EpisodesIndexPage: NextPage = () => {
    const { data, error } = useSWR('https://api.sampleapis.com/futurama/episodes', fetcher);
    console.log(data);
    if (error) return <div>An error has occurred.</div>
    if (!data) return <div>Loading...</div>
    return (
        <EpisodesContainer>
            {data.map((episodes: EpisodesData) => {
                const {  number, title, writers, originalAirDate,
                    desc,id} = episodes;
                return (
                    <EpisodesCard key={`futurama-cast-${id}`}>
                        
                        {/* <Profile src={images.main} alt="" /> */}
        
                        <E_Title>{number}. {title}</E_Title>
                        <p>{originalAirDate}. {writers}</p>
                        <EpisodesStory>{desc}</EpisodesStory>
    
                    </EpisodesCard>
                )
        })}
        </EpisodesContainer>
    )
}
const EpisodesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    background:#3989c7;
  
    @media (max-width: 1270px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const EpisodesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    height: 250px;
    width: 400px;
    text-align: center;
    background-color: #f7f7c9;
    color: #919178;
    margin-top: 7%;
`
const E_Title = styled.h2`
    font-size: 20px;
    color: black;
    font-weight: 600;
    margin: 4% 0;
`
const Person = styled.img`
    height: 200px;
    /* aspect-ratio: 9 / 16; */
    object-fit: contain;
    border : 2px solid #c9c0c0;
    border-radius: 25%;
    margin-top: 10px;
`
const EpisodesStory = styled.small`
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 0 5%;
`
export default EpisodesIndexPage;