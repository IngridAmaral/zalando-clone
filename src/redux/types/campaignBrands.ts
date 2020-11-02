export enum CampaignBrandsActionTypes {
  FETCH_REQUEST = '@@campaignBrands/FETCH_REQUEST',
  FETCH_SUCCESS = '@@campaignBrands/FETCH_SUCCESS',
  FETCH_ERROR = '@@campaignBrands/FETCH_ERROR',
}

export type TCard = {
  id: string;
  description: string;
  price: number;
  productImageLink: string;
  isNew?: boolean;
  hasSustainabilityFlag?: boolean;
  hasDifferentPrices?: boolean;
  extraInformation?: string;
};

export type TBrand = {
  brandName: string;
  background: string;
  fontColor: string;
  subTitle: string;
  linkText: string;
  mainImg: string;
  text: string;
  cards: TCard[];
  cardsBackground: string;
};

export interface CampaignBrandsState {
  readonly loading: boolean;
  readonly data: TBrand[];
  readonly error: Error | null;
}
