import { createType } from '@joystream/types';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class ProposalPostDeletedHandler extends BaseEventHandler {
  @OnEvent('proposalsDiscussion.PostDeleted')
  async handleProposalPostDeletedEvent(payload: EventWithBlock) {
    const [memberId, proposalId, postId] = [
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostDeleted',
        0,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostDeleted',
        1,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostDeleted',
        2,
      ),
    ];

    const memberHandle = await this.getMemberHandleById(
      memberId?.toString() || '',
    );
  }
}
