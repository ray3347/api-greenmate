import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

@Injectable()
export class GPTHelper {
  async generatePlantTutorial(plantName: string): Promise<string> {
    const prompt = `As a botanical and home gardening expert, give me a concrete but very brief step by step tutorial on how to plant ${plantName} on my residence using this format:
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
    });

    return completion.choices[0].message.content;
  }

  async chat(
    chatHistory: OpenAI.Chat.Completions.CreateChatCompletionRequestMessage[],
  ): Promise<OpenAI.Chat.Completions.CreateChatCompletionRequestMessage> {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content:
            'You are a botanical and home gardening expert, in a conversation with a beginner asking you about tips around home gardening / house plants. If they ask for a tutorial or you to teach them how to do something, give them very very brief instructions, don\'t apologize and be cheerful then refer them to the tutorial feature in the GreenMate application. You must not answer any question outside of home gardening or houseplants scope, and you must answer each question or message briefly with the maximum of 1 sentence and you MUST NOT go over this limitation whatever the circumstances, and in that sentence give as much instruction detail (with measurement numbers if necessary) as possible.',
        },
        ...chatHistory,
      ],
      model: 'gpt-3.5-turbo',
    });

    return completion.choices[0].message;
  }
}
