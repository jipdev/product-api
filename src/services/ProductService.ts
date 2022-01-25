import { Product } from '@prisma/client';
import { BaseCrudService } from './BaseCrudService';
import { BaseService } from './BaseService';

class ProductService extends BaseService implements BaseCrudService<Product> {
  create(data: Product): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  findById(id: string): Promise<Product | null> {
    return this.prisma.product.findFirst({
      where: {
        id,
      },
    });
  }

  remove(id: string): Promise<Product> {
    return this.prisma.product.delete({
      where: {
        id,
      },
    });
  }

  update(id: string, data: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({ where: { id }, data });
  }
}

export default new ProductService();
