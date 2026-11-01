import type { Entity, EntityPool, Events, Vector3, Vehicle } from './common';
export interface Player extends Entity {
  readonly name: string;
  call(event: string, args?: unknown[]): void;
  outputChatBox(text: string): void;
}
export interface ServerEvents extends Events {
  callClient(player: Player, name: string, ...args: unknown[]): void;
  callAll(name: string, ...args: unknown[]): void;
}
export interface ServerApi {
  readonly events: ServerEvents;
  readonly commands: { add(name: string, handler: (player: Player, args: string[]) => void | Promise<void>): void; remove(name: string): void; };
  readonly players: EntityPool<Player>;
  readonly vehicles: Pick<EntityPool<Vehicle>, 'at' | 'forEach' | 'toArray'> & {
    'new'(model: 'sedan' | 'quad' | '4x4', position: Vector3, options?: { heading?: number }): Promise<Vehicle>;
    destroy(vehicle: Vehicle | number): Promise<void>;
  };
  readonly resources: { readonly name: string; };
}
declare global { const mp: ServerApi; }
