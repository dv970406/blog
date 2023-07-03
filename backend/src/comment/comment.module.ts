import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/core/typeorm-ex.module';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { PostRepository } from 'src/post/post.repository';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([CommentRepository, PostRepository]),
  ],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
