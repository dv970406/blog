import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get('')
  getPosts() {
    return true;
  }
  @Get('/:postId')
  getPostById() {
    return true;
  }
  @Post('')
  createPost() {
    return true;
  }
  @Put('/:postId')
  updatePost() {
    return true;
  }
  @Delete('/:postId')
  deletePost() {
    return true;
  }
}
