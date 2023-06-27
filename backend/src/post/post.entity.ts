import { CoreEntity } from 'src/core/core.entity';
import { Entity } from 'typeorm';

@Entity('Post')
export class Post extends CoreEntity {}
