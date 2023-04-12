import { Inject, Injectable } from '@nestjs/common';
import { Cities } from './cities.entity';
import { CITIES_REPOSITORY } from 'src/utils/constants';

@Injectable()
export class CitiesService {
  constructor(@Inject(CITIES_REPOSITORY) private citiesRepo: typeof Cities) {}

  async getCities() {
    return await this.citiesRepo.findAll();
  }
}
