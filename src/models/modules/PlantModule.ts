import { Module } from "@nestjs/common";
import { PlantHelper } from "src/helper/PlantHelper";
import { PlantServices } from "src/services/PlantServices";

@Module({
    providers: [PlantHelper],
    controllers: [PlantServices]
})

export class PlantModule{}