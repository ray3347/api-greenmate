import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY
});

@Injectable()
export class GPTHelper{

    async generatePlantTutorial(plantName : string) : Promise<string>{
        const prompt = `As a botanical and home gardening expert, give me a detailed tutorial on how to plant ${plantName} on my residence!`;

        const completion = await openai.chat.completions.create({
            messages:[
                {
                    role: "system",
                    content: "You are a botanical and home gardening expert"
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            model: "gpt-3.5-turbo",
          });

          console.log(completion);

          return completion.choices[0].message.content;
    }
}