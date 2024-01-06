import { Headers, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class AuthHelper {
  async getToken(token: string): Promise<string> {
    try {
      const decodedToken = atob(token);
      if (decodedToken != undefined && decodedToken === process.env.TOKEN_AUTH) {
        const encodedToken = btoa(process.env.ROUTE_AUTH);
        return encodedToken;
      } else {
        return null;
      }
    } catch (ex) {
        return null;
    }
  }
}
