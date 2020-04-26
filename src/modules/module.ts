import { MonitorService } from './monitor/monitor.service';
import { MonitorController } from './monitor/monitor.controller';
import { LoggerService } from './logger/logger.service';
import { LoggerController } from './logger/logger.controller';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [AppController, LoggerController, MonitorController],
  providers: [AppService, LoggerService, MonitorService],
})
export class AppModule {}
