import { Inject, Injectable } from '@nestjs/common';
import { States } from './states.entity';
import { STATES_REPOSITORY } from 'src/utils/constants';

@Injectable()
export class StatesService {
  constructor(
    @Inject(STATES_REPOSITORY) private statesRepository: typeof States,
  ) {}

  async getAllStates() {
    return await this.statesRepository.findAll();
  }

  async createState(data) {
    return await this.statesRepository.create({
      name: data.name,
    });
  }
}
