import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WorkerId } from '@joystream/types/primitives';
import { Balance } from '@polkadot/types/interfaces';
import type { Option } from '@polkadot/types';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class RewardUpdatedHandler extends BaseEventHandler {
  @OnEvent('*.WorkerRewardAmountUpdated')
  async handleRewardUpdatedEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const workerId = data[0] as WorkerId;
    const workerAffected = await this.queryNodeClient.workerById(
      `${section}-${workerId.toString()}`,
    );
    const reward = (data[1] as Option<Balance>).unwrapOr(
      0 as unknown as Balance,
    );
  }
}
