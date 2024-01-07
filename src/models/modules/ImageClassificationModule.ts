import { Module } from "@nestjs/common";
import { ImageClassificationHelper } from "src/helper/ImageClassificationHelper";
import { ImageClassificationServices } from "src/services/ImageClassificationServices";

@Module({
    providers:[ImageClassificationHelper],
    controllers:[ImageClassificationServices]
})

export class ImageClassificationModule{}