import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OpeningId, WorkerId } from '@joystream/types/primitives';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class OpeningFilledHandler extends BaseEventHandler {
  @OnEvent('*.OpeningFilled')
  async handleOpeningFilledEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const filledOpeningId = data[0] as OpeningId;
    const filledOpeningObject = await this.queryNodeClient.openingById(
      `${section}-${filledOpeningId.toString()}`,
    );
    const hiredWorkers = Object.values<WorkerId>(
      JSON.parse(data[1].toString()),
    );

    hiredWorkers.map(async (id, index, values) => {
      const hiredWorker = await this.queryNodeClient.workerById(
        `${section}-${id.toString()}`,
      );
    });
  }
}
