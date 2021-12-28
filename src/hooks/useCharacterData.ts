import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { CHARACTERS_API_ENDPOINT } from "../constants";

export const useChracterData = (path: string | undefined | string[]) => {
  if (!path) {
    return useSWR(`${CHARACTERS_API_ENDPOINT}/characters`, fetcher);
  }
  return useSWR(`${CHARACTERS_API_ENDPOINT}/characters/${path}`, fetcher);
};
