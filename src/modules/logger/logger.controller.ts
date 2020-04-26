import { ResponseData } from './../../utils/Response';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post('add/:appId')
  async createApp(@Body() body, @Param() param) {
    if (!body.content) {
      return ResponseData.error(-1, 'content 不能为空')
    }
    if (!param.appId) {
      return ResponseData.error(-1, 'appid 不能为空')
    }
    await this.loggerService.add({
      user: body.user || '',
      content: body.content,
      appId: param.appId
    })
    return ResponseData.success({})
  }
  
  @Get('list/:appId')
  async getAppList() {
    const loglist = await this.loggerService.getListAll()
    return ResponseData.success(loglist)
  }

}
