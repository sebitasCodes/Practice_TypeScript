export interface Driver {
  database: string;
  password: string;
  port: number;


  connect(): void;

  disconnect(): void;
  isConnected(name: string): boolean;
}


class postgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
}

class  orcaleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}
  disconnect(): void {
    throw new Error("Method not implemented.");
  }
  isConnected(name: string): boolean {
    throw new Error("Method not implemented.");
  }
  connect(): void {

  }
}
