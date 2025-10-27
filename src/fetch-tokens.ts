export const httpFetchTokens = async (chainId: number, evmAddress: string) => {
  return fetch(`/api/chain-info/${chainId}/${evmAddress}`).then((res) =>
    res.json(),
  );
};
export type Tokens = ReadonlyArray<{
  contract_decimals: number;
  contract_name: string | null;
  contract_ticker_symbol: string;
  contract_address: string;
  supports_erc: string[];
  logo_url: string;
  last_transferred_at: string | null;
  native_token: boolean;
  type: string;
  balance: string;
  balance_24h: string | null;
  quote_rate: number | null;
  quote_rate_24h: number | null;
  quote: number | null;
  quote_24h: number | null;
  nft_data: any;
}>;
