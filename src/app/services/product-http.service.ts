import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { PorductService } from '../models/product-service.model';
import { Product } from '../models/product.model';

export class ProductHttpServices implements PorductService {
  private base_url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.base_url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(
      `${this.base_url}/${id}`,
      changes
    );
    return data;
  }
  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(this.base_url, dto);
    return data;
  }
  async findOne(id: Product['id']){
    const { data } = await axios.get<Product>(`${this.base_url}/${id}`)
    return data
  }
}
