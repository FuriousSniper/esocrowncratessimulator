export interface CrateType {
  name: string;
  miniatureLink: string;
  rewersLink: string;
  link: string;
  dropMap: DropMapType
}

export interface DropMapType{
  radiant: RewardType[],
  apex: RewardType[],
  legendary: RewardType[],
  epic: RewardType[],
  superior: RewardType[],
  fine: RewardType[],
  common: RewardType[]
}

export interface RewardType {
  name: string;
  cardImage: string;
  quality: ITEMQUALITY;
  type: ITEMTYPE;
  gems: number;
  reward1Chance?: number;
  reward2Chance?: number;
  reward3Chance?: number;
  reward4Chance?: number;
  rewardBonusChance?: number;
}

export interface FrontCardType {
  itemtype: ITEMTYPE;
  quality: ITEMQUALITY;
  link: string;
}

