import { Injectable } from '@nestjs/common';
import { renameSync } from 'fs';

@Injectable()
export default class ImagesService {
  public async uploadImage(image: Express.Multer.File) {
    renameSync(
      image.path,
      `${image.path}.${image.originalname.split('.').at(-1)}`,
    );

    console.log(image.originalname.split('.').at(-1));
    console.log(image);
    return image;
  }
}
