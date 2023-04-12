import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { NoAuth } from 'src/auth/auth.decorator';

@Controller('cities')
export default class CitiesController {
  constructor(private citiesService: CitiesService) {}
  @Get()
  @NoAuth()
  async getAllCities() {
    return await this.citiesService.getCities();
  }
}
