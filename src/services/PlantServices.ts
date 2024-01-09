import { Controller, Get, HttpStatus, Param, Res, UseGuards } from '@nestjs/common';
import { PlantHelper } from 'src/helper/PlantHelper';
import { IPlant } from 'src/models/entities/plant/IPlant';
import { AuthGuard } from './AuthGuard';

@Controller('plants')
export class PlantServices {
  constructor(private readonly helper: PlantHelper) {}

  @UseGuards(AuthGuard)
  @Get('get')
  async getAllPlants(@Res() response): Promise<IPlant[]> {
    try {
      const data = await this.helper.getAllPlants();

      return response.status(HttpStatus.OK).json({
        data: data,
      });
    } catch (ex) {
      return response.status(ex.status).json(ex.response);
    }
  }

  @UseGuards(AuthGuard)
  @Get('get/:className')
  async getSingularPlant(
    @Res() response,
    @Param('className') className: string,
  ) {
    try {
      const data = await this.helper.getSingularPlant(className);
      return response.status(HttpStatus.OK).json({
        data: data,
      });
    } catch (ex) {
      return response.status(ex.status).json(ex.response);
    }
  }
}
