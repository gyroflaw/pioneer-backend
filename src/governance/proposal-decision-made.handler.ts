import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';
@Injectable()
export class ProposalDecisionMadeHandler extends BaseEventHandler {
  @OnEvent('proposalsEngine.ProposalDecisionMade')
  async handleProposalDecisionMadeEvent(payload: EventWithBlock) {
    const [proposalId, decision] = [
      this.getDataFromEvent(
        [payload.event],
        'proposalsEngine',
        'ProposalDecisionMade',
        0,
      ),
      this.getDataFromEvent(
        [payload.event],
        'proposalsEngine',
        'ProposalDecisionMade',
        1,
      ),
    ];
  }
}
