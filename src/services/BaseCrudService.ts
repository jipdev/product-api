export interface BaseCrudService<T> {
  findAll: () => Promise<T[]>;
  findById: (id: string) => Promise<T | null>;
  create: (data: T) => Promise<T>;
  update: (id: string, data: Partial<T>) => Promise<T>;
  remove: (id: string) => Promise<T>;
}
