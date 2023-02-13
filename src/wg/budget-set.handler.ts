import { Balance } from '@polkadot/types/interfaces';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class BudgetSetHandler extends BaseEventHandler {
  @OnEvent('*.BudgetSet')
  async handleBudgetSetEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const balance = (data[0] as Balance).toNumber();
  }
}
