import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class ProposalPostCreatedHandler extends BaseEventHandler {
  @OnEvent('proposalsDiscussion.PostCreated')
  async handleProposalPostCreatedEvent(payload: EventWithBlock) {
    const [memberId, proposalId, content] = [
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostCreated',
        1,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostCreated',
        2,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsDiscussion',
        'PostCreated',
        3,
      ),
    ];

    const memberHandle = await this.getMemberHandleById(
      memberId?.toString() || '',
    );
  }
}
