import { Body, Controller, HttpStatus, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ImageClassificationHelper } from "src/helper/ImageClassificationHelper";
import { AuthGuard } from "./AuthGuard";
import { IImageRequestDTO } from "src/models/requests/IImageRequestDTO";
import { ApiService } from "src/constants/ApiService";
import { HttpService } from "src/constants/HttpService";
import { IClassifiedImageResponseDTO } from "src/models/response/IClassifiedImageResponseDTO";
import { FileInterceptor } from "@nestjs/platform-express";
import { PlantDatabase } from "src/models/entities/plant/Plant";

@Controller('images')
export class ImageClassificationServices{
    constructor(private readonly helper:ImageClassificationHelper){}

    @UseGuards(AuthGuard)
    @Post('classify/plant')
    @UseInterceptors(FileInterceptor('imgData'))
    async classify(@Res() response,@UploadedFile() file): Promise<string>{
        try{
            const imgData = file.buffer.toString('base64')
            const data : IClassifiedImageResponseDTO = await this.helper.classify(imgData)

            if(data.predictions.length > 0){
                const plant = PlantDatabase.find((x)=>x.class === data.predictions[0].class);

                if(!plant){
                    return response.status(HttpStatus.OK).json({
                        data: data
                    });
                }

                return response.status(HttpStatus.OK).json({
                    data: plant
                });             
            }            
            return response.status(HttpStatus.OK).json({
                data: null
            });
        }
        catch(ex){
            return response.status(ex.status).json(ex.response);
        }
    }
}