import { OpeningId } from '@joystream/types/primitives';
import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class OpeningAddedOrCancelledHandler extends BaseEventHandler {
  private readonly logger = new Logger(OpeningAddedOrCancelledHandler.name);

  @OnEvent('*.OpeningAdded')
  async handleOpeningAddedEvent(payload: EventWithBlock) {
    await this.handle(payload);
  }

  @OnEvent('*.OpeningCanceled')
  async handleOpeningCanceledEvent(payload: EventWithBlock) {
    await this.handle(payload);
  }

  async handle(payload: EventWithBlock) {
    const { section, method, data } = payload.event.event;

    const openingId = data[0] as OpeningId;
    const openingIdKey = `${section}-${openingId.toString()}`;
    this.logger.debug(openingIdKey);

    const qnOpeningObject = await this.queryNodeClient.openingById(
      openingIdKey,
    );
    if (!qnOpeningObject || !qnOpeningObject.workingGroupOpeningByUniqueInput) {
      this.logger.log('Opening not found in QN');
    } else {
      if (method === 'OpeningAdded') {
        // TODO
      } else {
        // TODO
      }
    }
  }
}
