import axios from "axios";
import type { NextPage } from "next";
import useSWR from "swr";
import { InventoryData } from "../../types/inventory";
import styled from "@emotion/styled";
import Link from "next/link";

const fetcher = (url: string) => axios(url).then((res) => res.data);
const InventoryPage: NextPage = () => {
  const { data, error } = useSWR(
    "https://api.sampleapis.com/futurama/inventory",
    fetcher
  );
  console.log(data);
  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <InventoryContainer>
      {data.map((inventory: InventoryData) => {
        const { title, category, description, slogan, price, stock, id } =
          inventory;
        return (
          <InventoryCard key={`futurama-inventory-${id}`}>
            <Title>[ {title} ]</Title>
            <Slogan>{slogan || 'X slogan X'}</Slogan>
            <Category>Category : {category}</Category>
            <PriceStock>{price}$ stock: {stock || 0}</PriceStock> 
            <Description>{description}</Description>
            
            
          </InventoryCard>
        );
      })}
    </InventoryContainer>
  );
};
export default InventoryPage;

const InventoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
const InventoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
  width: 400px;
  height: 180px;
  background-color: #98e9fd;
  margin: 5% 5%;
`;
const Title = styled.h2`
  font-size: 20px;
  background-color: #f1f196;
  color: #000000;
  font-weight: 500;
  margin: 3%;
`
const Slogan = styled.p`
  margin-bottom: 3%;
  font-size: 18px;
  color: #000000;
  line-height: 18px;
  background: #8add8a;
`
const Category = styled.p`
  font-size: 16px;
  color: #000000;
  margin-bottom: 3%;
`
const PriceStock = styled.p`
  font-size: 14px;
  color: #464242;
`
const Description = styled.small`
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #888787;
  margin: 3%;
`


