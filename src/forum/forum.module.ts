import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PioneerGraphQLModule } from 'src/gql/pioneer.module';
import { ThreadCreatedHandler } from './thread-created.handler';
import { PostCreatedHandler } from './post-created.handler';

@Module({
  imports: [ConfigModule.forRoot(), PioneerGraphQLModule],
  providers: [ThreadCreatedHandler, PostCreatedHandler],
})
export class ForumModule {}
