import { CustomRepository } from 'src/core/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@CustomRepository(Category)
export class CategoryRepository extends Repository<Category> {
  async isExistCategory(categoryId: string) {
    const isExist = await this.exist({
      where: { id: categoryId },
    });

    if (!isExist) {
      throw new Error('존재하지 않는 카테고리입니다.');
    }

    return isExist;
  }
}
