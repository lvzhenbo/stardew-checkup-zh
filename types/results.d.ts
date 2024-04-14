import type { Gender } from '.';

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
  name: string;
  id: string;
  stats: {
    [key: string]: number;
  };
  mailReceived?: string[];
  eventsSeen?: Array<number | string>;
  experiencePoints: number[];
  gender: Gender;
  farmingLevel: number;
  fishingLevel: number;
  foragingLevel: number;
  miningLevel: number;
  combatLevel: number;
  totalLevel?: number;
  maxSkillNum?: number;
  monsterKilledCompleted?: boolean;
  stardropsCompleted?: boolean;
}

export interface Money {
  totalMoneyEarned?: number;
  separateWallets?: boolean;
}
