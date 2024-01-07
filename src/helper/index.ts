import { Injectable } from "@nestjs/common";

@Injectable()
export class tryHelper {
    
    generateText() : string {
        return 'GreenMate API V1.2 made with NestJS'
    }
}