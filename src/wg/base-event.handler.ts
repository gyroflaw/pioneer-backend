import { Injectable } from '@nestjs/common';

import { RetryablePioneerClient } from 'src/gql/pioneer.client';

@Injectable()
export abstract class BaseEventHandler {
  constructor(protected readonly queryNodeClient: RetryablePioneerClient) {}

  // @Once('ready')
  async onReady(): Promise<void> {
    // TODO
  }
}
