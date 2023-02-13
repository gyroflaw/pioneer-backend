import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { WorkerId } from '@joystream/types/primitives';
import { Balance } from '@polkadot/types/interfaces';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';
import { PalletWorkingGroupRewardPaymentType } from '@polkadot/types/lookup';

@Injectable()
export class RewardPaidHandler extends BaseEventHandler {
  @OnEvent('*.RewardPaid')
  async handleRewardPaidEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const paidWorkerId = data[0] as WorkerId;
    const paidWorkerAffected = await this.queryNodeClient.workerById(
      `${section}-${paidWorkerId.toString()}`,
    );
    const paidReward = data[2] as Balance;
    const isRewardMissed = (data[3] as PalletWorkingGroupRewardPaymentType)
      .isMissedReward;
  }
}
