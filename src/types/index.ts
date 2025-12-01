export interface Fighter {
  id: string;
  name: string;
  rank: number;
  record: string;
  lastFight?: string;
  status?: string;
}

export interface WeightClass {
  id: string;
  name: string;
  fighters: Fighter[];
}

export interface LeagueRankings {
  league: string;
  lastUpdated: string;
  weightClasses: WeightClass[];
}

