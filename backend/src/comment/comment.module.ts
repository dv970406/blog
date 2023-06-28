import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/core/typeorm-ex.module';
import { CommentRepository } from './comment.repository';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([CommentRepository])],
  providers: [CommentService],
  controllers: [CommentController],
})
export class CommentModule {}
