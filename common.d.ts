export interface Vector3 { x: number; y: number; z: number; }
export type EventHandler = (...args: any[]) => void | Promise<void>;
export interface Events {
  add(name: string, handler: EventHandler): void;
  add(handlers: Record<string, EventHandler>): void;
  remove(name: string, handler?: EventHandler): void;
  call(name: string, ...args: unknown[]): void;
}
export interface Entity { readonly id: number; readonly position: Vector3; }
export interface EntityPool<T extends Entity> extends Iterable<T> {
  readonly length: number;
  at(id: number): T | undefined;
  exists(entity: number | T): boolean;
  forEach(handler: (entity: T) => void): void;
  toArray(): T[];
}
export interface Vehicle extends Entity { readonly model: string; readonly netOwner: number; }
