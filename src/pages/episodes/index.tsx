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
                        <Writers>{originalAirDate}. {writers}</Writers>
                        <EpisodesStory>{desc}</EpisodesStory>
    
                    </EpisodesCard>
                )
        })}
        </EpisodesContainer>
    )
}
export default EpisodesIndexPage;
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
    height: 200px;
    width: 400px;
    text-align: center;
    background-color: #f7f7c9;
    color: #919178;
    margin: 3% 0;
    border: 2px solid #68685b;
`
const E_Title = styled.h2`
    font-size: 22px;
    color: black;
    font-weight: 600;
    margin: 3%;
`
const Writers = styled.p`
    font-size: 16px;
    color: #464242;
    margin-bottom: 3%;
`
const EpisodesStory = styled.small`
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 5% 5%;
`
