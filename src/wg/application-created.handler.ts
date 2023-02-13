import { ApplicationId } from '@joystream/types/primitives';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PalletWorkingGroupApplyOnOpeningParams } from '@polkadot/types/lookup';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base-event.handler';

@Injectable()
export class ApplicationCreatedHandler extends BaseEventHandler {
  @OnEvent('*.AppliedOnOpening')
  async handleApplicationCreatedEvent(payload: EventWithBlock) {
    const { section, data } = payload.event.event;

    const applicationOpeningId = (
      data[0] as PalletWorkingGroupApplyOnOpeningParams
    ).openingId;
    const applicantId = (data[0] as PalletWorkingGroupApplyOnOpeningParams)
      .memberId;
    const applicationId = data[1] as ApplicationId;
    const openingObject = await this.queryNodeClient.openingById(
      `${section}-${applicationOpeningId.toString()}`,
    );
    const applicant = await this.queryNodeClient.memberById(
      applicantId.toString(),
    );
  }
}
