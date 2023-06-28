import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmExModule } from './core/typeorm-ex.module';
import { Post } from './post/post.entity';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { Category } from './category/category.entity';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/Comment.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.local' : '.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: process.env.NODE_ENV === 'dev',
      logging: true,

      entities: [Post, Category, Comment],
    }),
    TypeOrmExModule,
    PostModule,
    CategoryModule,
    CommentModule,
  ],
})
export class AppModule {}
