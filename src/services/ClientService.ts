import { Client } from '@prisma/client';
import { BaseCrudService } from './BaseCrudService';
import { BaseService } from './BaseService';

class ClientService extends BaseService implements BaseCrudService<Client> {
  create(data: Client): Promise<Client> {
    return this.prisma.client.create({ data });
  }

  findAll(): Promise<Client[]> {
    return this.prisma.client.findMany();
  }

  findById(id: string): Promise<Client | null> {
    return this.prisma.client.findFirst({
      where: { id },
    });
  }

  remove(id: string): Promise<Client> {
    return this.prisma.client.delete({
      where: { id },
    });
  }

  update(id: string, data: Partial<Client>): Promise<Client> {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }
}

export default new ClientService();
