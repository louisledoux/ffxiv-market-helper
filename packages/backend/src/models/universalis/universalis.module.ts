import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UniversalisService } from './universalis.service';

@Module({
  imports: [HttpModule],
  providers: [UniversalisService],
  exports: [UniversalisService],
})
export class UniversalisModule {}
