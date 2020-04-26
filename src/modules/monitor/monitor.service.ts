import { prisma } from '../../prisma/index';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitorService {
  emit ({
    event,
    eventTime,
    eventUser,
    eventParam,
    appId
  }) {
    return prisma.monitor.create({
      data: {
        event,
        eventTime,
        eventUser,
        eventParam,
        app: {
          connect: {
            id: appId
          }
        }
      }
    })
  }

  getListAll () {
    return prisma.monitor.findMany()
  }
}
