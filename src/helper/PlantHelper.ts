import { Injectable } from "@nestjs/common";
import { IPlant } from "src/models/entities/plant/IPlant";
import { PlantDatabase } from "src/models/entities/plant/Plant";

@Injectable()
export class PlantHelper{
    async getAllPlants():Promise<IPlant[]>{
        return PlantDatabase;
    }

    async getSingularPlant(className:string):Promise<IPlant>{
        const findPlant = PlantDatabase.find((x)=>x.class===className);
        return findPlant ?? null;
    }
}