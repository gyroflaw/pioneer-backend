import { Injectable, Logger } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ForumPostId } from '@joystream/types/primitives';

import { PostByIdQuery } from 'src/qntypes';
import { EventWithBlock } from 'src/types';
import { BaseEventHandler } from './base.event.handler';

@Injectable()
export class PostCreatedHandler extends BaseEventHandler {
  private readonly logger = new Logger(PostCreatedHandler.name);

  @OnEvent('forum.PostAdded')
  async handlePostCreatedEvent(payload: EventWithBlock) {
    const { data } = payload.event.event;
    const postId = data[0] as ForumPostId;
    const post = await this.queryNodeClient.postById(postId.toString());
    //  TODO
  }

  getLogger(): Logger {
    return this.logger;
  }
}
