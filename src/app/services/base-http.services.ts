export class BaseHttpService<TypeClass> {
  getAll(): TypeClass[] | Promise<TypeClass[]> {
    return [];
  }
}

const service = new BaseHttpService<string>();
service.getAll();
// const service1 = new BaseHttpService<number>();
// service1.data;
