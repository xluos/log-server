import { ResponseData } from './../../utils/Response';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  async createApp(@Body() body) {
    if (!body.name) {
      return ResponseData.error(-1, 'name 不能为空')
    }
    const app = await this.appService.create({
      name: body.name,
      describe: body.describe
    })
    return ResponseData.success(app)
  }
  
  @Get('list')
  async getAppList() {
    const applist = await this.appService.getListAll()
    return ResponseData.success(applist)
  }

}
