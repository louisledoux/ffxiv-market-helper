import { Module } from '@nestjs/common';
import { UniversalisResolver } from './universalis.resolver';
import { UniversalisService } from './universalis.service';

@Module({
  providers: [UniversalisResolver, UniversalisService]
})
export class UniversalisModule {}
