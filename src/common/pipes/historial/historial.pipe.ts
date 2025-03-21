import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class HistorialPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}
