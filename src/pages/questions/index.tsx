import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import { QuestionsData } from "../../types/questions";
import styled from "@emotion/styled";


const fetcher = (url: string) => axios(url).then((res) => res.data);
const QuestionsPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/questions",
    fetcher
  );
  console.log(data);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      {/* <h1> Question </h1> */}
      {data.map((questions: QuestionsData) => {
        const { question, possibleAnswers, correctAnswer,id } = questions;
        
        return (
          <Questionscard key={`futurama-questions-${id}`}>
            <Cardnum>{id}. {question}</Cardnum>
           <Radioselect>
                {possibleAnswers.map((ex, index: number) => {
                    return (
                        <div>
                            <input type="radio" id={String(index)} value={ex} name={`anser${id}`} />
                            <label htmlFor={String(index)}>{ex}</label>
                        </div>
                    )}
                )}
           </Radioselect>
            
            {/* <p>{correctAnswer}</p> */}
          </Questionscard>
        );
      })}
    </Container>
  );
};
export default QuestionsPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-content: space-between;
  width: 100%;
  height: 100%;
  color: white;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
  }
  padding-top: 5%;
`;
const Questionscard = styled.div`
  background-color: #000000;
  width: 600px;
  height: 170px;
  border-radius:0 50px 0 50px;
  margin: 2%;
`;
const Cardnum = styled.p`
    font-weight: 700;
    font-size: 15px;
    margin: 3%;
`
const Radioselect = styled.div`
    margin-left: 5%;
`


