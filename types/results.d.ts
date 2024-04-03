export interface Results {
  summary: Summary;
  money: Money;
}

export interface Summary {
  showDetailsButton?: boolean;
  farmName?: string;
  farmType?: string;
  farmer?: string;
  dayOfMonth?: number;
  currentSeason?: string;
  year?: number;
  playHr?: number;
  playMin?: number;
  version?: string;
  versionLabel?: string;
}

export interface Money {
  totalMoneyEarned?: number;
}
