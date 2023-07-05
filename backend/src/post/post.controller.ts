import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostInput, CreatePostOutput } from './dtos/create.dto';
import { UpdatePostInput, UpdatePostOutput } from './dtos/update.dto';
import { DeletePostOutput } from './dtos/delete.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import * as multerS3 from 'multer-s3';
import { FilteringPosts, GetAllPostsOutput } from './dtos/gets.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get('')
  getAllPosts(@Query() filterData: FilteringPosts): Promise<GetAllPostsOutput> {
    return this.postService.getAllPosts(filterData);
  }
  @Get('/:postId')
  getPostById(@Param() { postId }) {
    return this.postService.getPostById(postId);
  }
  @Post('')
  // @UseInterceptors(
  //   FilesInterceptor('imageFiles', 20, {
  //     storage: multerS3({
  //       s3: new AWS.S3({
  //         credentials: {
  //           accessKeyId: process.env.S3_ACCESS_KEY,
  //           secretAccessKey: process.env.S3_SECRET_KEY,
  //         },
  //       }),
  //       bucket: process.env.S3_BUCKET_NAME,
  //       acl: 'public-read',
  //       key: (request, file, cb) => {
  //         cb(null, `${Date.now().toString()}-${file.originalname}`);
  //       },
  //     }),
  //   }),
  // )
  createPost(
    @Body() createPostInput: CreatePostInput,
    // @UploadedFiles() imageFiles: Express.Multer.File[],
  ): Promise<CreatePostOutput> {
    return this.postService.createPost(createPostInput);
  }
  @Put('/:postId')
  // @UseInterceptors(
  //   FilesInterceptor('imageFiles', 20, {
  //     storage: multerS3({
  //       s3: new AWS.S3({
  //         credentials: {
  //           accessKeyId: process.env.S3_ACCESS_KEY,
  //           secretAccessKey: process.env.S3_SECRET_KEY,
  //         },
  //       }),
  //       bucket: process.env.S3_BUCKET_NAME,
  //       acl: 'public-read',
  //       key: (request, file, cb) => {
  //         cb(null, `${Date.now().toString()}-${file.originalname}`);
  //       },
  //     }),
  //   }),
  // )
  updatePost(
    @Param() postId: string,
    @Body() updatePostInput: UpdatePostInput,
    // @UploadedFiles() imageFiles: Express.Multer.File[],
  ): Promise<UpdatePostOutput> {
    return this.postService.updatePost(postId, updatePostInput);
  }
  @Delete('/:postId')
  deletePost(@Param() postId: string): Promise<DeletePostOutput> {
    return this.postService.deletePost(postId);
  }
}
