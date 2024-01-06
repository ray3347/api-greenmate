import { Module } from '@nestjs/common';
import { tryModule } from './models/modules/tryModule';
import { GPTModule } from './models/modules/GPTModule';
import { AuthModule } from './models/modules/AuthModule';

@Module({
  imports: [tryModule, AuthModule,GPTModule],
})
export class AppModule {}
