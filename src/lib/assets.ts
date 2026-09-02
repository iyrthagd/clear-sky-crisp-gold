export type Move = "Bullish" | "Bearish";

export type Asset = {
  ticker: string;
  name: string;
  price: number;
  expectedMove: Move;
  timeHorizon: string;
  range52w: string;
  estimate: string;
  rank: number;
  sparkline: number[];
  marketCap: string;
  pe: string;
  volume: string;
  avgVolume: string;
  eps: string;
  dividend: string;
  beta: string;
  sector: string;
  about: string;
};

function series(base: number, swings: number[]): number[] {
  return swings.map((s) => Math.round((base * (1 + s)) * 100) / 100);
}

export const august30: Asset[] = [
  {
    ticker: "DG",
    name: "Dollar General",
    price: 125.4,
    expectedMove: "Bullish",
    timeHorizon: "6–12 months",
    range52w: "84 – 147",
    estimate: "148",
    rank: 91,
    sparkline: series(125.4, [-0.12, -0.08, -0.04, 0.02, -0.01, 0.05, 0.08, 0.04, 0.01, 0]),
    marketCap: "27.6B",
    pe: "16.2",
    volume: "2.1M",
    avgVolume: "2.8M",
    eps: "7.74",
    dividend: "2.36",
    beta: "0.48",
    sector: "Consumer Defensive",
    about:
      "Dollar General operates a national chain of discount retail stores focused on consumables, seasonal goods, and household basics.",
  },
  {
    ticker: "DASH",
    name: "DoorDash",
    price: 230.15,
    expectedMove: "Bearish",
    timeHorizon: "1 year+",
    range52w: "108 – 238",
    estimate: "188",
    rank: 64,
    sparkline: series(230.15, [-0.18, -0.1, 0.04, 0.12, 0.18, 0.08, 0.14, 0.2, 0.06, 0]),
    marketCap: "94.1B",
    pe: "118.4",
    volume: "4.6M",
    avgVolume: "5.1M",
    eps: "1.94",
    dividend: "—",
    beta: "1.72",
    sector: "Consumer Cyclical",
    about:
      "DoorDash is a logistics platform connecting consumers with local merchants for food and convenience delivery.",
  },
  {
    ticker: "AAPL",
    name: "Apple",
    price: 228.9,
    expectedMove: "Bullish",
    timeHorizon: "12 months",
    range52w: "169 – 260",
    estimate: "255",
    rank: 88,
    sparkline: series(228.9, [-0.06, -0.02, 0.01, 0.04, -0.03, 0.02, 0.05, 0.03, -0.01, 0]),
    marketCap: "3.42T",
    pe: "34.1",
    volume: "48.2M",
    avgVolume: "54.0M",
    eps: "6.71",
    dividend: "1.00",
    beta: "1.24",
    sector: "Technology",
    about:
      "Apple designs consumer electronics, software, and services including iPhone, Mac, and a growing services franchise.",
  },
  {
    ticker: "NVDA",
    name: "NVIDIA",
    price: 178.22,
    expectedMove: "Bullish",
    timeHorizon: "6–18 months",
    range52w: "86 – 184",
    estimate: "210",
    rank: 96,
    sparkline: series(178.22, [-0.22, -0.12, -0.04, 0.08, 0.02, 0.14, 0.18, 0.09, 0.05, 0]),
    marketCap: "4.35T",
    pe: "52.8",
    volume: "162M",
    avgVolume: "178M",
    eps: "3.38",
    dividend: "0.04",
    beta: "1.68",
    sector: "Technology",
    about:
      "NVIDIA designs GPUs and accelerated computing platforms used in AI data centers, gaming, and automotive.",
  },
  {
    ticker: "TSLA",
    name: "Tesla",
    price: 248.6,
    expectedMove: "Bearish",
    timeHorizon: "3–9 months",
    range52w: "138 – 488",
    estimate: "198",
    rank: 57,
    sparkline: series(248.6, [0.18, 0.08, -0.04, 0.12, -0.08, -0.02, 0.06, -0.1, 0.04, 0]),
    marketCap: "798B",
    pe: "182.0",
    volume: "82.4M",
    avgVolume: "91.0M",
    eps: "1.37",
    dividend: "—",
    beta: "2.31",
    sector: "Consumer Cyclical",
    about:
      "Tesla manufactures electric vehicles, energy storage, and related software, with a growing autonomy effort.",
  },
  {
    ticker: "AMZN",
    name: "Amazon",
    price: 198.45,
    expectedMove: "Bullish",
    timeHorizon: "12 months",
    range52w: "151 – 242",
    estimate: "235",
    rank: 90,
    sparkline: series(198.45, [-0.08, -0.04, 0.02, 0.06, 0.01, 0.08, 0.05, 0.03, -0.02, 0]),
    marketCap: "2.09T",
    pe: "38.6",
    volume: "36.1M",
    avgVolume: "41.2M",
    eps: "5.14",
    dividend: "—",
    beta: "1.15",
    sector: "Consumer Cyclical",
    about:
      "Amazon operates e-commerce, cloud computing (AWS), advertising, and a logistics network at global scale.",
  },
  {
    ticker: "META",
    name: "Meta Platforms",
    price: 612.3,
    expectedMove: "Bullish",
    timeHorizon: "6–12 months",
    range52w: "442 – 740",
    estimate: "690",
    rank: 85,
    sparkline: series(612.3, [-0.1, -0.04, 0.03, 0.08, 0.02, 0.06, -0.02, 0.04, 0.01, 0]),
    marketCap: "1.55T",
    pe: "26.4",
    volume: "12.8M",
    avgVolume: "15.1M",
    eps: "23.21",
    dividend: "2.10",
    beta: "1.21",
    sector: "Communication Services",
    about:
      "Meta operates Facebook, Instagram, WhatsApp, and invests in reality labs alongside a large advertising network.",
  },
  {
    ticker: "GOOGL",
    name: "Alphabet",
    price: 186.75,
    expectedMove: "Bullish",
    timeHorizon: "12 months",
    range52w: "140 – 207",
    estimate: "215",
    rank: 87,
    sparkline: series(186.75, [-0.07, -0.03, 0.02, 0.05, 0.01, 0.06, 0.03, 0.04, -0.01, 0]),
    marketCap: "2.28T",
    pe: "22.9",
    volume: "22.4M",
    avgVolume: "26.0M",
    eps: "8.15",
    dividend: "0.80",
    beta: "1.02",
    sector: "Communication Services",
    about:
      "Alphabet is the parent of Google Search, YouTube, Android, and Google Cloud, with additional bets in other labs.",
  },
  {
    ticker: "MSFT",
    name: "Microsoft",
    price: 432.18,
    expectedMove: "Bullish",
    timeHorizon: "12 months",
    range52w: "344 – 468",
    estimate: "480",
    rank: 94,
    sparkline: series(432.18, [-0.05, -0.02, 0.01, 0.03, 0.0, 0.04, 0.02, 0.03, -0.01, 0]),
    marketCap: "3.21T",
    pe: "35.7",
    volume: "18.6M",
    avgVolume: "21.4M",
    eps: "12.11",
    dividend: "3.32",
    beta: "0.91",
    sector: "Technology",
    about:
      "Microsoft sells cloud (Azure), productivity software, Windows, LinkedIn, and gaming across enterprise and consumer markets.",
  },
  {
    ticker: "NFLX",
    name: "Netflix",
    price: 704.5,
    expectedMove: "Bearish",
    timeHorizon: "6 months",
    range52w: "589 – 936",
    estimate: "640",
    rank: 71,
    sparkline: series(704.5, [0.12, 0.08, 0.02, -0.04, 0.01, -0.06, -0.02, 0.03, -0.05, 0]),
    marketCap: "302B",
    pe: "47.3",
    volume: "3.9M",
    avgVolume: "4.4M",
    eps: "14.89",
    dividend: "—",
    beta: "1.29",
    sector: "Communication Services",
    about:
      "Netflix is a global streaming entertainment service with original and licensed films and series.",
  },
];

export const august29: Asset[] = august30.map((a, i) => ({
  ...a,
  price: Math.round(a.price * (i % 2 === 0 ? 0.985 : 1.012) * 100) / 100,
  rank: Math.max(50, a.rank - (i % 3)),
}));

export const allAssets: Asset[] = august30;

export function getAsset(ticker: string): Asset | undefined {
  const key = ticker.replace(/^\$/, "").toUpperCase();
  return allAssets.find((a) => a.ticker === key);
}

export function formatPrice(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
