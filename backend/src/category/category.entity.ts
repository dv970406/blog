import { CoreEntity } from 'src/core/core.entity';
import { Post } from 'src/post/post.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('Category')
export class Category extends CoreEntity {
  @Column({ unique: true })
  categoryName: string;

  // @OneToMany(() => Post, (post) => post.categories)
  // posts: Post[];
}
