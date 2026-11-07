import type { Entity, EntityPool, Events, Vehicle } from './common';
import type { Natives } from './natives';
export type { Natives, LuaValue, LuaArgument, LuaFunction, LuaReference } from './natives';
export interface Player extends Entity { readonly name: string; }
export interface Browser {
  readonly id: number;
  active: boolean;
  call(event: string, ...args: unknown[]): void;
  execute(script: string): void;
  destroy(): void;
}
export interface ClientApi {
  readonly natives: Natives;
  readonly events: Events & { callRemote(name: string, ...args: unknown[]): void; };
  readonly players: EntityPool<Player> & { readonly local: Player; };
  readonly vehicles: EntityPool<Vehicle>;
  readonly browsers: { 'new'(url: string): Browser; };
  readonly gui: { readonly chat: { focus(active: boolean): void; } };
  readonly resources: { readonly name: string; };
}
declare global { const mp: ClientApi; const natives: Natives; }
