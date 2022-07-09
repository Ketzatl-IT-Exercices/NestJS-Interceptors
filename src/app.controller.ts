import {Controller, Get, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {MesureDurationInterceptor} from "./interceptors/mesure-duration.interceptor";
import {LogsClientsInterceptor} from "./interceptors/logs-clients.interceptor";

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(MesureDurationInterceptor, LogsClientsInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }
}
