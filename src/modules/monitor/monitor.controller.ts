import { ResponseData } from '../../utils/Response';
import { Controller, Get, Post, Body, Param, Query, Response } from '@nestjs/common';
import { MonitorService } from './monitor.service';

@Controller('monitor')
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Post('emit/:appId')
  async createApp(@Body() body, @Param() param) {
    if (!body.event) {
      return ResponseData.error(-1, 'event 不能为空')
    }
    if (!param.appId) {
      return ResponseData.error(-1, 'appid 不能为空')
    }
    let eventParam = ''
    if (body.eventParam) {
      eventParam = JSON.stringify(body.eventParam)
    }
    // console.log(eventParam)
    await this.monitorService.emit({
      event: body.event,
      eventUser: body.user || body.eventUser || '',
      eventTime: body.eventTime || new Date(),
      eventParam,
      appId: param.appId
    })
    return ResponseData.success({})
  }

  @Get('emit/normal/:appId')
  async createNormalApp(@Response() res, @Query() query, @Param() param) {
    console.log(param, query)
    if (!query.event) {
      return ResponseData.error(-1, 'event 不能为空')
    }
    if (!param.appId) {
      return ResponseData.error(-1, 'appid 不能为空')
    }
    const event = query.event
    delete query.event
    const eventParam = JSON.stringify(query)
    await this.monitorService.emit({
      event,
      eventUser: query.user || query.eventUser || '',
      eventTime: query.eventTime || new Date(),
      eventParam,
      appId: param.appId
    }).catch(console.error)
    return res.status(204).send()
  }

  @Get('list/:appId')
  async getAppList(@Param() param) {
    console.log(param)
    const monitorlist = await this.monitorService.getListAll(param.appId)
    return ResponseData.success(monitorlist)
  }

}
