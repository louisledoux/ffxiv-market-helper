import { Args, Query, Resolver } from '@nestjs/graphql';
import { firstValueFrom } from 'rxjs';
import { XivApiService } from './xiv-api.service';
import { XivApiSearchResults } from './interfaces/xiv-api-search-results.interface';

@Resolver()
export class XivApiResolver {
  constructor(
    private readonly xivApiService: XivApiService,
  ) {}

  @Query(() => XivApiSearchResults)
  async getXivApiSearchResults(
    @Args('query', { type: () => String }) query: string,
  ) {
    const res = await this.xivApiService.fetchSearchResults(query);
    const { data } = await firstValueFrom(res);
    return data;
  }
}
