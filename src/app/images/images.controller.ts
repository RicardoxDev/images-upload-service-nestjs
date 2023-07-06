import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import ImagesService from './images.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';

@Controller('images')
export default class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'assets/media',
      }),
    }),
  )
  public async uploadImage(@UploadedFile() image: Express.Multer.File) {
    return await this.imagesService.uploadImage(image);
  }
}
