import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/core/typeorm-ex.module';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostRepository } from './post.repository';
import { CategoryRepository } from 'src/category/category.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([PostRepository, CategoryRepository]),
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
