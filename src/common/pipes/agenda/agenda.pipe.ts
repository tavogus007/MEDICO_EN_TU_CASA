import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class AgendaPipe implements PipeTransform {
  transform(value: any) {
    return value;
  }
}
