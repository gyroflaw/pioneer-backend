import { Injectable, Logger } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class WorkingGroupService {
  private readonly logger = new Logger(WorkingGroupService.name);

  constructor(private readonly configService: ConfigService) {}
}
