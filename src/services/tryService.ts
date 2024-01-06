import { Controller, ForbiddenException, Get, HttpStatus, Res, UseGuards } from "@nestjs/common";
import { tryHelper } from "src/helper";
import { AuthGuard } from "./AuthGuard";

@Controller()
export class tryService{
    constructor(private readonly tryHelper: tryHelper){}

    @UseGuards(AuthGuard)
    @Get()
    async generateText() : Promise<string> {
        try{
            const data = this.tryHelper.generateText();

            return data;
        }
        catch(ex){
            throw ex;
        }
        
    } 
}