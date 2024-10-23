clifin
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/clifin.svg)](https://npmjs.org/package/clifin)
[![Downloads/week](https://img.shields.io/npm/dw/clifin.svg)](https://npmjs.org/package/clifin)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g clifin
$ clifin COMMAND
running command...
$ clifin (--version)
clifin/0.0.0 darwin-arm64 node-v22.10.0
$ clifin --help [COMMAND]
USAGE
  $ clifin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [clifin](#clifin)
- [Usage](#usage)
- [Commands](#commands)
  - [`clifin hello PERSON`](#clifin-hello-person)
  - [`clifin hello world`](#clifin-hello-world)
  - [`clifin help [COMMAND]`](#clifin-help-command)
  - [`clifin plugins`](#clifin-plugins)
  - [`clifin plugins add PLUGIN`](#clifin-plugins-add-plugin)
  - [`clifin plugins:inspect PLUGIN...`](#clifin-pluginsinspect-plugin)
  - [`clifin plugins install PLUGIN`](#clifin-plugins-install-plugin)
  - [`clifin plugins link PATH`](#clifin-plugins-link-path)
  - [`clifin plugins remove [PLUGIN]`](#clifin-plugins-remove-plugin)
  - [`clifin plugins reset`](#clifin-plugins-reset)
  - [`clifin plugins uninstall [PLUGIN]`](#clifin-plugins-uninstall-plugin)
  - [`clifin plugins unlink [PLUGIN]`](#clifin-plugins-unlink-plugin)
  - [`clifin plugins update`](#clifin-plugins-update)

## `clifin hello PERSON`

Say hello

```
USAGE
  $ clifin hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ clifin hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/adamdlear/clifin/blob/v0.0.0/src/commands/hello/index.ts)_

## `clifin hello world`

Say hello world

```
USAGE
  $ clifin hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ clifin hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/adamdlear/clifin/blob/v0.0.0/src/commands/hello/world.ts)_

## `clifin help [COMMAND]`

Display help for clifin.

```
USAGE
  $ clifin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for clifin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.16/src/commands/help.ts)_

## `clifin plugins`

List installed plugins.

```
USAGE
  $ clifin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ clifin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/index.ts)_

## `clifin plugins add PLUGIN`

Installs a plugin into clifin.

```
USAGE
  $ clifin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into clifin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CLIFIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLIFIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ clifin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ clifin plugins add myplugin

  Install a plugin from a github url.

    $ clifin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ clifin plugins add someuser/someplugin
```

## `clifin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ clifin plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ clifin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/inspect.ts)_

## `clifin plugins install PLUGIN`

Installs a plugin into clifin.

```
USAGE
  $ clifin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into clifin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CLIFIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CLIFIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ clifin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ clifin plugins install myplugin

  Install a plugin from a github url.

    $ clifin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ clifin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/install.ts)_

## `clifin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ clifin plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ clifin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/link.ts)_

## `clifin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifin plugins unlink
  $ clifin plugins remove

EXAMPLES
  $ clifin plugins remove myplugin
```

## `clifin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ clifin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/reset.ts)_

## `clifin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifin plugins unlink
  $ clifin plugins remove

EXAMPLES
  $ clifin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/uninstall.ts)_

## `clifin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ clifin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ clifin plugins unlink
  $ clifin plugins remove

EXAMPLES
  $ clifin plugins unlink myplugin
```

## `clifin plugins update`

Update installed plugins.

```
USAGE
  $ clifin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
