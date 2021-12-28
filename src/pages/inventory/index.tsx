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
            <p>[ {title} ]</p>
            <p>Category : {category}
            </p>
            <p>{description}{slogan}{price}{stock}</p>
          </InventoryCard>
        );
      })}
    </InventoryContainer>
  );
};
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
  width: 300px;
  height: 200px;
  background-color: #ececb0;
  margin: 5% 5%;
`;
const Mainimg = styled.img`
  height: 300px;
`;
const Story = styled.p`
  line-height: 1.7;
`;

export default InventoryPage;
