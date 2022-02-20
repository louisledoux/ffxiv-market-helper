import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { UniversalisHistory } from './interfaces/universalis-history.interface';
import { UniversalisItem } from './interfaces/universalis-item.interface';

export interface UniversalisParameters {
  serverOrDc: string,
  itemID: number,
  isHq?: boolean,
  entriesWithin?: number,
}

@Injectable()
export class UniversalisService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async fetchItemMarketData({
    serverOrDc, itemID, isHq, entriesWithin,
  }: UniversalisParameters): Promise<Observable<AxiosResponse<UniversalisItem>>> {
    return this.httpService
      .get(`https://universalis.app/api/${serverOrDc}/${itemID}${isHq ? '?hq=1' : ''}${entriesWithin ? `?entriesWithin=${entriesWithin}` : ''}`);
  }

  async fetchItemMarketHistory({
    serverOrDc, itemID, entriesWithin,
  }: UniversalisParameters): Promise<Observable<AxiosResponse<UniversalisHistory>>> {
    return this.httpService
      .get(`https://universalis.app/api/history/${serverOrDc}/${itemID}${entriesWithin ? `?entriesWithin=${entriesWithin}` : ''}`);
  }
}
