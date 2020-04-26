import { prisma } from './../../prisma/index';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  add ({
    user,
    appId,
    content = ''
  }) {
    return prisma.log.create({
      data: {
        user,
        content,
        app: {
          connect: {
            id: appId
          }
        }
      }
    })
  }

  getListAll () {
    return prisma.log.findMany()
  }
}
