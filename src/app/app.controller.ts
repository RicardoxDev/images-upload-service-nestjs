import { Controller, Get, UseInterceptors } from '@nestjs/common';
import AppService from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { EventPattern } from '@nestjs/microservices';
import { log } from 'console';

@Controller()
export default class AppController {
  constructor(private imagesService: AppService) {}

  @EventPattern('hello')
  public async getHello(image: Express.Multer.File) {
    log(image);
    return await this.imagesService.getHello(image);
  }

  @EventPattern('image_upload')
  //@UseInterceptors(
  //  FileInterceptor('file', {
  //    storage: diskStorage({
  //      destination: 'assets/media',
  //    }),
  //  }),
  //)
  public async uploadImage(image: Express.Multer.File) {
    return await this.imagesService.uploadImage(image);
  }
}
