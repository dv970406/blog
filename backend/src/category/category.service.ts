import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoryRepository) {}

  async getCategories() {
    return this.categoryRepo.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }
}
