import { CustomRepository } from 'src/core/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';

@CustomRepository(Comment)
export class CommentRepository extends Repository<Comment> {}
