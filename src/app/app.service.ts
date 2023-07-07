import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { lstat, lstatSync, readFileSync, renameSync } from 'fs';
import { isBinaryFileSync } from 'isbinaryfile';
import { join } from 'path';

@Injectable()
export default class AppService {
  public async getImage(id: string) {
    const path = join('/assets/media', id);
    return {
      buffer: readFileSync(path),
      path,
    };
  }

  public async getHello(image: Express.Multer.File) {
    console.clear();
    log('here we go again');
    const path = image.path + '.png';
    const buffer = readFileSync(path);
    log(image, path, buffer);
    //const binaryCheck = await isBinaryFileSync();
    // const result: Promise<Response> = Webp.cwebp(
    //   path,
    //   path + '.webp',
    //   '-q 80',
    //   '-v',
    // );
    // result.then((data) => log(data));

    log(image);
    log(path);
    //log(binaryCheck);

    return image;
  }

  public async uploadImage(image: Express.Multer.File) {
    renameSync(
      image.path,
      `${image.path}.${image.originalname.split('.').at(-1)}`,
    );

    log(image.originalname.split('.').at(-1));
    log(image);
    return image;
  }
}
