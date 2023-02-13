import { WorkerId } from '@joystream/types/primitives';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class LeadHandler extends BaseEventHandler {
  @OnEvent('*.LeaderSet')
  async handleLeadSetEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;
    const leaderId = data[0] as WorkerId;
    const leaderWorker = await this.queryNodeClient.workerById(
      `${section}-${leaderId.toString()}`,
    );
  }

  @OnEvent('*.LeaderUnset')
  async handleLeadUnsetEvent(payload: EventWithBlock) {
    const { section } = payload.event.event;
  }
}
