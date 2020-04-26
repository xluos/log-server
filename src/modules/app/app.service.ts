import { prisma } from './../../prisma/index';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  create ({
    name,
    describe = ''
  }) {
    return prisma.app.create({
      data: {
        name,
        describe
      }
    })
  }

  getListAll () {
    return prisma.app.findMany()
  }
}
