import { QueryFunctionContext } from 'react-query';

const BASE_URL = 'https://api.coinpaprika.com/v1';
const COINS_URL = `${BASE_URL}/coins`;

export interface coinTypes {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export const coins = () => fetch(COINS_URL).then((response) => response.json());
export const info = (context: QueryFunctionContext<string[]>) =>
  fetch(`${COINS_URL}/${context.queryKey[1]}`).then((response) =>
    response.json()
  );
export const history = (context: QueryFunctionContext<string[]>) =>
  fetch(
    `${BASE_URL}/tickers/${context.queryKey[1]}/historical?start=${
      new Date().toISOString().split('T')[0]
    }&interval=30m`
  ).then((response) => response.json());
