import { PrismaClient } from '@prisma/client';

export class BaseService {
  protected prisma = new PrismaClient();
}
