export interface Results {
  summary: Summary;
  money: Money;
}

export interface Summary {
  farmName?: string;
  farmType?: string;
  farmer?: Farmer;
  farmhands?: Farmer[];
  dayOfMonth?: number;
  currentSeason?: string;
  year?: number;
  playHr?: number;
  playMin?: number;
  version?: string;
  versionLabel?: string;
}

export interface Farmer {
  name?: string;
  id?: string;
  stats?: {
    [key: string]: number;
  };
  mailReceived?: string[];
  eventsSeen?: Array<number | string>;
  experiencePoints?: number[];
}

export interface Money {
  totalMoneyEarned?: number;
  separateWallets?: boolean;
}
