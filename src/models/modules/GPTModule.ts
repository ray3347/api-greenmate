import { Module } from "@nestjs/common";
import { GPTHelper } from "src/helper/GPTHelper";
import { GPTServices } from "src/services/GPTServices";

@Module({
    providers: [GPTHelper],
    controllers: [GPTServices]
})

export class GPTModule{}