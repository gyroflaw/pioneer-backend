import { ApiPromise, WsProvider } from '@polkadot/api';
import { Hash, EventRecord } from '@polkadot/types/interfaces';
import { BlockNumber } from '@polkadot/types/interfaces';
import { Vec } from '@polkadot/types';

export async function connectApi(url: string): Promise<ApiPromise> {
  const provider = new WsProvider(url);
  return await ApiPromise.create({ provider });
}

export function getBlockHash(
  api: ApiPromise,
  block: BlockNumber | number,
): Promise<Hash> {
  try {
    return api.rpc.chain.getBlockHash(block);
  } catch (e) {
    return getBestHash(api);
  }
}

export function getBestHash(api: ApiPromise) {
  return api.rpc.chain.getFinalizedHead();
}

export function getEvents(
  api: ApiPromise,
  hash: Hash,
): Promise<Vec<EventRecord>> {
  return api.query.system.events.at(hash);
}

export function delay(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
