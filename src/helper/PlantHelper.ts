import { Injectable } from "@nestjs/common";
import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "src/models/entities/firebase";

@Injectable()
export class PlantHelper{
    async getAllPlants(){
        const plantData = [];
        const dbData = await getDocs(collection(db, 'master_plants'));

        dbData.forEach((plant) => {
            plantData.push(plant.data());
        });

        return plantData;
    }

    async getSingularPlant(className:string){
        var plant=null;
        const findPlant = await getDocs(query(collection(db, 'master_plants'), where('class', "==", className)));
        findPlant.forEach(x => {
            plant = x.data();
        });
        return plant;
    }
}