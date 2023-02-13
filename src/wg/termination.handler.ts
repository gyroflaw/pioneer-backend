import { WorkerId } from '@joystream/types/primitives';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class TerminationHandler extends BaseEventHandler {
  @OnEvent('*.TerminatedWorker')
  async handleWorkerTerminationEvent(payload: EventWithBlock) {
    this.handle(payload);
  }

  @OnEvent('*.TerminatedLeader')
  async handleLeaderTerminationEvent(payload: EventWithBlock) {
    this.handle(payload);
  }

  async handle(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const terminatedId = data[0] as WorkerId;
    const terminatedWorkerKey = `${section}-${terminatedId.toString()}`;
    const terminatedIdWorker = await this.queryNodeClient.workerById(
      terminatedWorkerKey,
    );
  }
}
