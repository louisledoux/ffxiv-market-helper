import { UniversalisModule } from '@models/universalis/universalis.module';
import { UserModule } from '@models/user/user.module';
import { XivApiModule } from '@models/xiv-api/xiv-api.module';
import { Module } from '@nestjs/common';
import { MarketDataResolver } from './market-data.resolver';
import { MarketDataService } from './market-data.service';

@Module({
  imports: [UniversalisModule, UserModule, XivApiModule],
  providers: [MarketDataResolver, MarketDataService],
})
export class MarketDataModule {}
