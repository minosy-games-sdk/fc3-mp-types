# FC3 MP TypeScript definitions

Definitions for the FC3 MP resource scripting API. This is a new API inspired by
resource-based runtimes and the mp namespace; it does not declare compatibility
with unmodified FiveM or RAGE MP resources.

Install from this repository with npm and reference one side per TypeScript
project: `@fc3mp/types/client` or `@fc3mp/types/server`. Compile client TypeScript
to JavaScript before distribution. The client runs on V8 without Node built-ins;
the server runs on Node.js LTS. Resource manifests list client, server, shared and
UI files explicitly. Server-only source must not be included in the client list.

Initial contracts cover events, commands, browsers, player/vehicle pools and
resource identity. Consult the main project's scripting roadmap for the current
verified implementation status. Types are contracts, not proof that every native
adapter has passed gameplay acceptance.
