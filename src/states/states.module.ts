import { Module } from '@nestjs/common';
import { StatesController } from './states.controller';
import { StatesService } from './states.service';
import { States } from './states.entity';
import { STATES_REPOSITORY } from 'src/utils/constants';

@Module({
  controllers: [StatesController],
  providers: [StatesService, { provide: STATES_REPOSITORY, useValue: States }],
})
export class StatesModule {}
