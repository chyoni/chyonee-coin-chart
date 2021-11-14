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
