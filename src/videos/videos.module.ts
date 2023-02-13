import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VideoCreatedHandler } from './video-created.handler';
import { AtlasGraphQLModule } from 'src/gql/atlas.module';

@Module({
  imports: [ConfigModule.forRoot(), AtlasGraphQLModule],
  providers: [VideoCreatedHandler],
})
export class VideoModule {}
