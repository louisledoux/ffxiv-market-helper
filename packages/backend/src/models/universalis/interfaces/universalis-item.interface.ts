export interface Listing {
  lastReviewTime: number;
  pricePerUnit: number;
  quantity: number;
  stainID: number;
  worldName?: string;
  worldID?: number;
  creatorName: string;
  creatorID: string;
  hq: boolean;
  isCrafted: true;
  listingID: null;
  materia: [];
  onMannequin: boolean;
  retainerCity: number;
  retainerID: string;
  retainerName: string;
  sellerID: string;
  total: number;
}

interface RecentBuyOrder {
  hq: boolean;
  pricePerUnit: number;
  quantity: number;
  timestamp: number;
  worldName?: string;
  worldID?: number;
  buyerName: string;
  total: number;
}

export interface UniversalisItem {
  itemID: number;
  lastUploadTime: number;
  listings: Listing[];
  recentHistory: RecentBuyOrder[];

  dcName?: string;

  worldName?: string;
  worldID?: number;

  currentAveragePrice: number;
  currentAveragePriceNQ: number;
  currentAveragePriceHQ: number;

  regularSaleVelocity: number;
  nqSaleVelocity: number;
  hqSaleVelocity: number;

  averagePrice: number;
  averagePriceNQ: number;
  averagePriceHQ: number;

  minPrice: number;
  minPriceNQ: number;
  minPriceHQ: number;

  maxPrice: number;
  maxPriceNQ: number;
  maxPriceHQ: number;

  stackSizeHistogram: any;
  stackSizeHistogramNQ: any;
  stackSizeHistogramHQ: any;

  worldUploadTimes?: Record<string, number>;
}
