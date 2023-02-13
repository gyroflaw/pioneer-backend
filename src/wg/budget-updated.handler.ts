import { Balance } from '@polkadot/types/interfaces';
import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

import { PalletCommonWorkingGroupIterableEnumsWorkingGroup } from '@polkadot/types/lookup';

@Injectable()
export class BudgetUpdatedHandler extends BaseEventHandler {
  private readonly logger = new Logger(BudgetUpdatedHandler.name);

  @OnEvent('*.UpdatedWorkingGroupBudget')
  async handleBudgetUpdatedEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const budgetChange = (data[1] as Balance).toNumber();
    const wg: PalletCommonWorkingGroupIterableEnumsWorkingGroup =
      data[0] as PalletCommonWorkingGroupIterableEnumsWorkingGroup;
    console.log(wg.toHuman());
  }
}
