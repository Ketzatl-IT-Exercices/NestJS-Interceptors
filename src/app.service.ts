import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  // Retourne un string aléatoire
  makeString(): string {
    let outString: string = '';
    let inOptions: string = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i = this.makeRandomNumber(); i++) {

      outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));

    }

    return outString;
  }

  // Retourne un nombre aléatoire
  makeRandomNumber() {
    const nb = Math.floor(Math.random() * 101);
    return nb
  }

  getHello(): string {
    const result: string = this.makeString();
    const content: string = `${result}`;
    return `${content}`;
  }
}
