import { PartialType } from '@nestjs/swagger';
import { CreateInfoDomicilioDto } from './create.infodom.dto';

export class UpdateInfoDomicilioDto extends PartialType(
  CreateInfoDomicilioDto,
) {}
