import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class ProposalPostUpdatedHandler extends BaseEventHandler {
  @OnEvent('proposalsDiscussion.PostUpdated')
  async handleProposalPostUpdatedEvent(payload: EventWithBlock) {
    const [postId, memberId, proposalId] = [
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostUpdated',
        0,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostUpdated',
        1,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostUpdated',
        2,
      ),
    ];

    const memberHandle = await this.getMemberHandleById(
      memberId?.toString() || '',
    );
  }
}
