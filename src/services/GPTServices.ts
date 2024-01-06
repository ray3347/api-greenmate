import {
  Controller,
  ForbiddenException,
  Get,
  HttpStatus,
  Param,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { GPTHelper } from 'src/helper/GPTHelper';
import { AuthGuard } from './AuthGuard';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

@Controller('gpt')
export class GPTServices {
  constructor(private readonly gptHelper: GPTHelper) {}

  @UseGuards(AuthGuard)
  @Get('generate-tutorial/:plant')
  async generateTutorial(
    @Res() response,
    @Param('plant') plant: string,
  ): Promise<string> {
    response.header('Content-Type', 'text/plain');
    try {
      const prompt = `As a botanical and home gardening expert, give me a concrete but very brief step by step tutorial on how to plant ${plant} on my residence using this format:
        1. [Step Name]: [Very Brief Step Description]

        2. [Step Name]: [Very Brief Step Description]

        and so on. If there measurements needed (e.g. temperatures and such), use exact or ranged numbers. Remember to always use that format with no exception and any unimportant texts!
        `;

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a botanical and home gardening expert',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        model: 'gpt-3.5-turbo',
        stream: true,
      });
      // const data = await this.gptHelper.generatePlantTutorial(plant);

      for await (const chunk of completion) {
        response.write(chunk.choices[0].delta.content);
      }

      response.end();
    } catch (ex) {
      return response.status(ex.status).json(ex.response);
    }
  }
}
