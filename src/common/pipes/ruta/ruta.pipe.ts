import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class RutaPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}
