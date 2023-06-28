import { CustomRepository } from 'src/core/typeorm-ex.decorator';
import { Post } from './post.entity';
import { Repository } from 'typeorm';

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {
  async isExistPost(postId: string) {
    const isExist = await this.exist({
      where: { id: postId },
    });

    if (!isExist) {
      throw new Error('존재하지 않는 글입니다.');
    }

    return isExist;
  }

  async findPost(postId: string) {
    const post = await this.findOneBy({ id: postId });

    if (!post) {
      throw new Error('존재하지 않는 글입니다.');
    }

    return post;
  }
}
