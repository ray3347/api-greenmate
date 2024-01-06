import { Injectable } from "@nestjs/common";

@Injectable()
export class tryHelper {
    
    generateText() : string {
        return 'GreenMate API V1.0 made with NestJS'
    }
}