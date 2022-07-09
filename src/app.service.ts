import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const content: string = 'Salut les bilouttes !'
    return `${content}`;
  }

  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 32; i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }

  result: string = this.makeString();
}
