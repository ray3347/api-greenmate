import { Module } from '@nestjs/common';
import { tryModule } from './models/modules/tryModule';
import { GPTModule } from './models/modules/GPTModule';
import { AuthModule } from './models/modules/AuthModule';
import { ImageClassificationModule } from './models/modules/ImageClassificationModule';
import { PlantModule } from './models/modules/PlantModule';

@Module({
  imports: [tryModule, AuthModule,GPTModule, ImageClassificationModule, PlantModule],
})
export class AppModule {}
