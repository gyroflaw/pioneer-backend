import { Balance } from '@polkadot/types/interfaces';
import { WorkerId } from '@joystream/types/primitives';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class StakeHandler extends BaseEventHandler {
  @OnEvent('*.StakeIncreased')
  async handleIncrease(payload: EventWithBlock) {
    await this.handle(payload);
  }

  @OnEvent('*.StakeDecreased')
  async handleDecrease(payload: EventWithBlock) {
    await this.handle(payload);
  }

  @OnEvent('*.StakeSlashed')
  async handleSlash(payload: EventWithBlock) {
    await this.handle(payload);
  }

  async handle(payload: EventWithBlock) {
    const { section, method, data } = payload.event.event;

    const stakeWorkerId = data[0] as WorkerId;
    const stakeWorker = await this.queryNodeClient.workerById(
      `${section}-${stakeWorkerId.toString()}`,
    );
    const stake = data[1] as Balance;
  }
}
