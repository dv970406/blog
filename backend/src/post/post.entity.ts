import { Category } from 'src/category/category.entity';
import { Comment } from 'src/comment/Comment.entity';
import { CoreEntity } from 'src/core/core.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity('Post')
export class Post extends CoreEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  // @Column()
  // imageFiles: string[];

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];
}
