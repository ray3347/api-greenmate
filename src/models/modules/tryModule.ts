import { Module } from "@nestjs/common";
import { tryHelper} from "src/helper";
import { tryService } from "src/services/tryService";

@Module({
    providers: [tryHelper],
    controllers: [tryService]
  })
  export class tryModule {}