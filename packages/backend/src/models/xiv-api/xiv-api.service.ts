import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { XivApiSearchResults } from './interfaces/xiv-api-search-results.interface';

@Injectable()
export class XivApiService {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  /**
   * Fetch XIVApi search results from user query
   * @param query The search query
   * @returns The XIV API search results
   */
  async fetchSearchResults(query: string): Promise<Observable<AxiosResponse<XivApiSearchResults>>> {
    const search = encodeURIComponent(query.split(' ').join('+'));
    return this.httpService.get(
      `https://xivapi.com/search?string=${
        search
      }&indexes=Item&limit=250&string_algo=wildcard_plus&filters=IsUntradable=0&language=fr&columns=Name_*,LevelItem,ID,ItemSearchCategory.Name_*,IconHD`,
    );
  }
}
