import { CoreEntity } from 'src/core/core.entity';
import { Post } from 'src/post/post.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('Comment')
export class Comment extends CoreEntity {
  @Column()
  comment: string;

  @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
  post: Post;
}
