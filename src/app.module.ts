import { WgModule } from './wg/wg.module';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ForumModule } from './forum/forum.module';
import { PioneerGraphQLModule } from './gql/pioneer.module';
import { BlockchainModule } from './blockchain/blockchain.module';
import { VideoModule } from './videos/videos.module';
import { AtlasGraphQLModule } from './gql/atlas.module';
import { JoyGovernanceModule } from './governance/governance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    PioneerGraphQLModule,
    AtlasGraphQLModule,
    BlockchainModule,
    WgModule,
    ForumModule,
    VideoModule,
    JoyGovernanceModule,
  ],
  providers: [],
})
export class AppModule {}
