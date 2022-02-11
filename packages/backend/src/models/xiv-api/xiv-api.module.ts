import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { XivApiResolver } from './xiv-api.resolver';
import { XivApiService } from './xiv-api.service';

@Module({
  imports: [HttpModule],
  providers: [XivApiResolver, XivApiService],
})
export class XivApiModule {}
