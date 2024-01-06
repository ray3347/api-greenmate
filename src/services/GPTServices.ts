import { Controller, ForbiddenException, Get, HttpStatus, Param, Query, Res, UseGuards } from "@nestjs/common";
import { GPTHelper } from "src/helper/GPTHelper";
import { AuthGuard } from "./AuthGuard";

@Controller('gpt')
export class GPTServices{
    constructor(private readonly gptHelper: GPTHelper){}

    @UseGuards(AuthGuard)
    @Get('generate-tutorial/:plant')
    async generateTutorial (@Res() response, @Param('plant') plant: string) : Promise<string>{
        try{
            const data = await this.gptHelper.generatePlantTutorial(plant);

            return response.status(HttpStatus.OK).json({
                data: data
            });
        }
        catch(ex){
            return response.status(ex.status).json(ex.response);
        }
        
    }
}