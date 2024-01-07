import { Injectable } from "@nestjs/common";
import { ApiService } from "src/constants/ApiService";
import { HttpService } from "src/constants/HttpService";
import { IClassifiedImageResponseDTO } from "src/models/response/IClassifiedImageResponseDTO";

@Injectable()
export class ImageClassificationHelper{
    async classify(imageData: string): Promise<IClassifiedImageResponseDTO>{
        const header : any= {
            ContentType: "application/x-www-form-urlencoded"
        }

        const data: IClassifiedImageResponseDTO = await HttpService.post(ApiService.plantDetectionApi, imageData, header)

        return data;
    }
}