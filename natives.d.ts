import type { NativeFunctions } from './natives.generated';

/** Lua has 32-bit numbers in this engine. Pass 64-bit entity IDs as strings. */
export type LuaValue = null | boolean | number | string | Uint8Array | LuaReference |
  readonly LuaValue[] | { readonly [key: string]: LuaValue } | ReadonlyMap<LuaValue, LuaValue>;
export type LuaArgument = LuaValue | undefined;
/** Every call returns a tuple, preserving multiple returns and nil slots. */
export type LuaFunction = (...args: LuaArgument[]) => Promise<LuaValue[]>;
/** An owned Lua VM reference; invalidated when client resources reload/disconnect. */
export interface LuaReference {
  readonly type: 'table' | 'function' | 'userdata' | 'thread' | 'lightuserdata';
  call(...args: LuaArgument[]): Promise<LuaValue[]>;
  get(key: LuaArgument): Promise<LuaValue>;
  set(key: LuaArgument, value: LuaArgument): Promise<void>;
  /** Copy table contents; cycles and opaque values remain references. */
  snapshot(): Promise<LuaValue>;
  release(): Promise<void>;
}
export interface Natives extends NativeFunctions {
  /** Resolve a dotted function name at call time, including later-loaded functions. */
  invoke(name: string, ...args: LuaArgument[]): Promise<LuaValue[]>;
  /** Read a global or dotted value, including constants and Lua table references. */
  get(name: string): Promise<LuaValue>;
}
