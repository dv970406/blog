import { CustomRepository } from 'src/core/typeorm-ex.decorator';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {}
