import { Body, Controller, Get, Post } from '@nestjs/common';
import { NoAuth } from 'src/auth/auth.decorator';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
  constructor(private statesService: StatesService) {}
  @Get()
  async getStates() {
    return await this.statesService.getAllStates();
  }

  @Post()
  async createState(@Body() body) {
    return await this.statesService.createState({
      name: body.name,
    });
  }
}
