# jupyterlab-slide-mode-keyboard-shortcuts

![Github Actions Status](https://github.com/sglyon/jupyterlab-silde-mode-keyboard/workflows/Build/badge.svg)

Jupyter lab extension to add keyboard shortcuts for altering cell slide mode.

## Requirements

- JupyterLab >= 2.0

## Install

```bash
jupyter labextension install jupyterlab-slide-mode-keyboard-shortcuts
```

## Usage

This package sets up configurable keyboard shortcuts for changing the slidemode of notebook cells.

The shortcuts only work in "command mode".

The default keyboard shortcuts are:

- slide: `Shift S`
- subslide: `Shift B`
- fragment: `Shift G`
- skip: `Shift I`
- notes: `Shift N`
- clear: `Shift C`

These can be customized via the standard JupyterLab keyboard shortcut custimization interface.

## Contributing

### Developer Install

The `jlpm` command is JupyterLab's pinned version of
[yarn](https://yarnpkg.com/) that is installed with JupyterLab. You may use
`yarn` or `npm` in lieu of `jlpm` below.

```bash
# Clone the repo to your local environment
# Move to slide-mode-keyboard-shortcuts directory

# Install dependencies
jlpm
# Build Typescript source
jlpm build
# Link your development version of the extension with JupyterLab
jupyter labextension install .
# Rebuild Typescript source after making changes
jlpm build
# Rebuild JupyterLab after making any changes
jupyter lab build
```

You can watch the source directory and run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild the extension and application.

```bash
# Watch the source directory in another terminal tab
jlpm watch
# Run jupyterlab in watch mode in one terminal tab
jupyter lab --watch
```

Now every change will be built locally and bundled into JupyterLab. Be sure to refresh your browser page after saving file changes to reload the extension (note: you'll need to wait for webpack to finish, which can take 10s+ at times).

### Uninstall

```bash
jupyter labextension uninstall jupyterlab-slide-mode-keyboard-shortcuts
```
