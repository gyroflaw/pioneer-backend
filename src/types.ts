import { EventRecord } from '@polkadot/types/interfaces';

export interface ChannelNames {
  [key: string]: string;
}

export interface Licenses {
  [key: string]: string;
}

export interface EventWithBlock {
  block: number;
  event: EventRecord;
}

export interface ForumCategoryToDiscordChannelMap {
  category: {
    id: number;
    name: string;
  };
  channels: string[];
}
