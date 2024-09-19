import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHelloPerlin(): string {
    return 'Olá Perlin e Luiz!!';
  }
}
