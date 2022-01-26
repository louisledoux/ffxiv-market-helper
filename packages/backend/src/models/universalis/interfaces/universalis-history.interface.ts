interface Entry {
  hq: boolean;
  pricePerUnit: number;
  quantity: number;
  timestamp: number;
  worldName: string;
  worldID: number;
}

export interface UniversalisHistory {
  itemID: number;
  lastUploadTime: number;
  entries: Entry[];

  dcName?: string;

  worldName?: string;
  worldID?: number;

  stackSizeHistogram: any;
  stackSizeHistogramNQ: any;
  stackSizeHistogramHQ: any;

  regularSaleVelocity: number;
  nqSaleVelocity: number;
  hqSaleVelocity: number;
}
