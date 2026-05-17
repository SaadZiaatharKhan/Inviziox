export const shellsData = {
  high: {
    "titan-vault": {
      name: "Titan Vault",
      subtitle: "High Cap - Strong Growth",
      value: "$169,700",
      percent: "+4.5%",
      graph: [25, 42, 36, 58, 66, 72, 88],
    },
    "apex-titan": {
      name: "Apex Titan",
      subtitle: "High Cap - Momentum Leader",
      value: "$182,400",
      percent: "+5.2%",
      graph: [18, 30, 44, 40, 61, 74, 92],
    },
    "prime-atlas": {
      name: "Prime Atlas",
      subtitle: "High Cap - Balanced Growth",
      value: "$174,850",
      percent: "+3.8%",
      graph: [22, 28, 39, 55, 51, 70, 79],
    },
    "crown-vault": {
      name: "Crown Vault",
      subtitle: "High Cap - Premium Reserve",
      value: "$168,900",
      percent: "+2.9%",
      graph: [30, 36, 34, 48, 62, 65, 76],
    },
    "royal-core": {
      name: "Royal Core",
      subtitle: "High Cap - Defensive Core",
      value: "$159,300",
      percent: "-1.1%",
      graph: [68, 64, 66, 57, 52, 48, 45],
    },
    "elite-shield": {
      name: "Elite Shield",
      subtitle: "High Cap - Quality Compounder",
      value: "$151,750",
      percent: "+4.1%",
      graph: [20, 34, 31, 47, 59, 63, 82],
    },
  },
  mid: {
    "atlas-core": {
      name: "Atlas Core",
      subtitle: "Mid Cap - Balanced",
      value: "$142,000",
      percent: "+2.1%",
      graph: [18, 24, 32, 29, 41, 50, 58],
    },
    "nova-bridge": {
      name: "Nova Bridge",
      subtitle: "Mid Cap - Growth Blend",
      value: "$128,600",
      percent: "+3.4%",
      graph: [16, 22, 28, 35, 33, 46, 54],
    },
    "orbit-lattice": {
      name: "Orbit Lattice",
      subtitle: "Mid Cap - Agile Allocation",
      value: "$117,250",
      percent: "+1.7%",
      graph: [24, 26, 31, 29, 37, 43, 49],
    },
    "meridian-pulse": {
      name: "Meridian Pulse",
      subtitle: "Mid Cap - Steady Upside",
      value: "$109,800",
      percent: "-0.8%",
      graph: [42, 45, 39, 41, 36, 34, 32],
    },
    "velocity-harbor": {
      name: "Velocity Harbor",
      subtitle: "Mid Cap - Active Rotation",
      value: "$101,450",
      percent: "+2.6%",
      graph: [14, 20, 19, 27, 35, 38, 45],
    },
  },
  low: {
    "guardian-base": {
      name: "Guardian Base",
      subtitle: "Low Cap - Stable",
      value: "$92,500",
      percent: "-1.2%",
      graph: [50, 48, 42, 44, 38, 35, 31],
    },
    "cedar-spark": {
      name: "Cedar Spark",
      subtitle: "Low Cap - Early Growth",
      value: "$78,300",
      percent: "+2.2%",
      graph: [20, 18, 25, 23, 31, 36, 41],
    },
    "ember-nest": {
      name: "Ember Nest",
      subtitle: "Low Cap - Tactical",
      value: "$64,900",
      percent: "+4.6%",
      graph: [12, 17, 24, 21, 34, 44, 53],
    },
    "meadow-core": {
      name: "Meadow Core",
      subtitle: "Low Cap - Defensive",
      value: "$58,750",
      percent: "-0.5%",
      graph: [36, 35, 32, 34, 30, 28, 27],
    },
    "ripple-forge": {
      name: "Ripple Forge",
      subtitle: "Low Cap - Volatile Upside",
      value: "$49,600",
      percent: "+3.1%",
      graph: [10, 16, 14, 23, 21, 32, 39],
    },
  },
} as const;

export type ShellCategory = keyof typeof shellsData;
export type ShellSlug<T extends ShellCategory = ShellCategory> =
  keyof (typeof shellsData)[T];

export const shellAssets = {
  stocks: [
    {
      id: 1,
      name: "Apple",
      price: "$189.22",
      change: "+2.14%",
      owned: "12 Shares",
      graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
    },
    {
      id: 2,
      name: "Tesla",
      price: "$248.91",
      change: "-1.62%",
      owned: "5 Shares",
      graph: "M0 30 Q20 45 40 20 T80 35 T120 15",
    },
  ],
  crypto: [
    {
      id: 1,
      name: "Bitcoin",
      price: "$45,389",
      change: "+2.45%",
      owned: "0.52 BTC",
      graph: "M0 40 Q20 10 40 25 T80 20 T120 30",
    },
    {
      id: 2,
      name: "Ethereum",
      price: "$3,180",
      change: "+1.12%",
      owned: "2.4 ETH",
      graph: "M0 35 Q20 25 40 32 T80 18 T120 22",
    },
  ],
  gold: [
    {
      id: 1,
      name: "Gold",
      price: "$2,045",
      change: "+1.8%",
      owned: "1.2 kg",
      graph: "M0 40 Q20 20 40 30 T80 15 T120 25",
    },
  ],
};
