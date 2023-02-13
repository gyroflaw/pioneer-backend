import { Balance } from '@polkadot/types/interfaces';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class BudgetSpendingHandler extends BaseEventHandler {
  @OnEvent('*.BudgetSpending')
  async handleBudgetSpendingEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const payee = data[0].toString();
    const spendingAmount = data[1] as Balance;
    try {
      const payeeWorker = await this.queryNodeClient.workersByAccount(payee);
    } catch (e) {}
  }
}
