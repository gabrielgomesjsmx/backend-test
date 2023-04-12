import { Module } from '@nestjs/common';
import { Cities } from './cities.entity';
import CitiesController from './cities.controller';
import { CitiesService } from './cities.service';
import { CITIES_REPOSITORY } from 'src/utils/constants';

@Module({
  providers: [{ provide: CITIES_REPOSITORY, useValue: Cities }, CitiesService],
  controllers: [CitiesController],
})
export class CitiesModule {}
