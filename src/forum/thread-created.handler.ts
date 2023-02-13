import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ForumThreadId } from '@joystream/types/primitives';

import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base.event.handler';

@Injectable()
export class ThreadCreatedHandler extends BaseEventHandler {
  private readonly logger = new Logger(ThreadCreatedHandler.name);

  @OnEvent('forum.ThreadCreated')
  async handleThreadCreatedEvent(payload: EventWithBlock) {
    const { data } = payload.event.event;
    const threadId = data[1] as ForumThreadId;
    const thread = await this.queryNodeClient.forumThreadById(
      threadId.toString(),
    );
    // TODO
  }

  getLogger(): Logger {
    return this.logger;
  }
}
