// marketData.ts
// Mock market data (Stocks, Crypto, Assets)
// Graph format example: [10, 20, 15, 30, 25]

/* =======================
   TYPES
======================= */

export type MarketCategory = "stocks" | "crypto" | "assets";

export interface BaseMarketItem {
  id: string;
  name: string;
  profitLossPercent: number;
  graph: number[];
}

export interface StockItem extends BaseMarketItem {
  symbol: string;
  amount: number;
  stocksOwned: number;
}

export interface CryptoItem extends BaseMarketItem {
  symbol: string;
  image: string;
  amount: number;
  unitsOwned: number;
}

export interface AssetItem extends BaseMarketItem {
  image: string;
  unit: string;
  pricePerUnit: number;
  color: string;
}

/* =======================
   STOCKS
======================= */

export const stocksData: StockItem[] = [
  {
    id: "stk1",
    name: "Apple",
    symbol: "AAPL",
    amount: 18500,
    profitLossPercent: 12.4,
    stocksOwned: 20,
    graph: [120, 135, 130, 150, 170, 185],
  },
  {
    id: "stk2",
    name: "Microsoft",
    symbol: "MSFT",
    amount: 14200,
    profitLossPercent: 8.9,
    stocksOwned: 10,
    graph: [210, 215, 225, 230, 240],
  },
  {
    id: "stk3",
    name: "Google",
    symbol: "GOOGL",
    amount: 9800,
    profitLossPercent: -3.2,
    stocksOwned: 5,
    graph: [150, 148, 146, 142, 145],
  },
  {
    id: "stk4",
    name: "Amazon",
    symbol: "AMZN",
    amount: 11300,
    profitLossPercent: 5.6,
    stocksOwned: 7,
    graph: [90, 95, 100, 110, 108],
  },
  {
    id: "stk5",
    name: "Tesla",
    symbol: "TSLA",
    amount: 7600,
    profitLossPercent: -6.8,
    stocksOwned: 6,
    graph: [300, 280, 260, 250, 255],
  },
  {
    id: "stk6",
    name: "Meta",
    symbol: "META",
    amount: 8900,
    profitLossPercent: 9.3,
    stocksOwned: 8,
    graph: [180, 185, 190, 200, 205],
  },
  {
    id: "stk7",
    name: "Netflix",
    symbol: "NFLX",
    amount: 6400,
    profitLossPercent: 4.1,
    stocksOwned: 4,
    graph: [320, 330, 325, 340],
  },
  {
    id: "stk8",
    name: "Nvidia",
    symbol: "NVDA",
    amount: 15400,
    profitLossPercent: 18.7,
    stocksOwned: 12,
    graph: [400, 420, 460, 500, 540],
  },
  {
    id: "stk9",
    name: "Intel",
    symbol: "INTC",
    amount: 5200,
    profitLossPercent: -2.4,
    stocksOwned: 15,
    graph: [55, 54, 53, 52, 54],
  },
  {
    id: "stk10",
    name: "Coca-Cola",
    symbol: "KO",
    amount: 4300,
    profitLossPercent: 3.9,
    stocksOwned: 18,
    graph: [60, 62, 63, 64],
  },
];

/* =======================
   CRYPTO
======================= */

export const cryptoData: CryptoItem[] = [
  {
    id: "cry1",
    name: "Bitcoin",
    symbol: "BTC",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    amount: 250000,
    profitLossPercent: 14.2,
    unitsOwned: 0.15,
    graph: [30000, 32000, 35000, 37000],
  },
  {
    id: "cry2",
    name: "Ethereum",
    symbol: "ETH",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    amount: 98000,
    profitLossPercent: 9.6,
    unitsOwned: 1.2,
    graph: [1800, 1900, 2100, 2200],
  },
  {
    id: "cry3",
    name: "Solana",
    symbol: "SOL",
    image: "https://cryptologos.cc/logos/solana-sol-logo.png",
    amount: 42000,
    profitLossPercent: -5.1,
    unitsOwned: 30,
    graph: [45, 42, 40, 41],
  },
  {
    id: "cry4",
    name: "Cardano",
    symbol: "ADA",
    image: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    amount: 22000,
    profitLossPercent: 6.4,
    unitsOwned: 2000,
    graph: [0.35, 0.38, 0.42],
  },
  {
    id: "cry5",
    name: "Ripple",
    symbol: "XRP",
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    amount: 18000,
    profitLossPercent: -1.9,
    unitsOwned: 1500,
    graph: [0.5, 0.48, 0.49],
  },
  {
    id: "cry6",
    name: "Polkadot",
    symbol: "DOT",
    image: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    amount: 16000,
    profitLossPercent: 7.1,
    unitsOwned: 120,
    graph: [6.2, 6.5, 7.0],
  },
  {
    id: "cry7",
    name: "Dogecoin",
    symbol: "DOGE",
    image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    amount: 12000,
    profitLossPercent: -3.5,
    unitsOwned: 5000,
    graph: [0.08, 0.075, 0.078],
  },
];

/* =======================
   ASSETS
======================= */

export const assetsData: AssetItem[] = [
  {
    id: "ast1",
    name: "Gold",
    image: "https://img.icons8.com/color/96/gold-bars.png",
    unit: "gram",
    pricePerUnit: 6200,
    profitLossPercent: 6.8,
    color: "#FFD700",
    graph: [5600, 5800, 6000, 6200],
  },
  {
    id: "ast2",
    name: "Silver",
    image: "https://img.icons8.com/color/96/silver-bars.png",
    unit: "gram",
    pricePerUnit: 75,
    profitLossPercent: 4.2,
    color: "#C0C0C0",
    graph: [68, 70, 73, 75],
  },
  {
    id: "ast3",
    name: "Crude Oil",
    image: "https://img.icons8.com/color/96/oil-industry.png",
    unit: "barrel",
    pricePerUnit: 6800,
    profitLossPercent: -2.6,
    color: "#2F2F2F",
    graph: [7200, 7000, 6800],
  },
  {
    id: "ast4",
    name: "Copper",
    image: "https://img.icons8.com/color/96/copper.png",
    unit: "kg",
    pricePerUnit: 720,
    profitLossPercent: 3.1,
    color: "#B87333",
    graph: [680, 700, 720],
  },
  {
    id: "ast5",
    name: "Natural Gas",
    image: "https://img.icons8.com/color/96/gas.png",
    unit: "MMBtu",
    pricePerUnit: 310,
    profitLossPercent: -4.8,
    color: "#4B5563",
    graph: [340, 330, 310],
  },
  {
    id: "ast6",
    name: "Platinum",
    image: "https://img.icons8.com/color/96/platinum.png",
    unit: "gram",
    pricePerUnit: 2900,
    profitLossPercent: 5.5,
    color: "#E5E7EB",
    graph: [2600, 2750, 2900],
  },
  {
    id: "ast7",
    name: "Wheat",
    image: "https://img.icons8.com/color/96/wheat.png",
    unit: "quintal",
    pricePerUnit: 2400,
    profitLossPercent: 2.9,
    color: "#F59E0B",
    graph: [2250, 2300, 2400],
  },
  {
    id: "ast8",
    name: "Real Estate Index",
    image: "https://img.icons8.com/color/96/city.png",
    unit: "index",
    pricePerUnit: 12500,
    profitLossPercent: 7.4,
    color: "#10B981",
    graph: [11000, 11800, 12500],
  },
];
