---
title: "Setting Up Alacritty Terminal in WSL Windows"
description: A guide to setting up Alacritty terminal emulator on Windows with WSL integration using the portable version.
keywords: til, windows, wsl, terminal, alacritty
date: 2026-02-16
---

The problem: Windows Terminal is good, but Alacritty offers better performance and cross-platform consistency.

The solution: Install Alacritty on Windows and configure it to launch WSL by default.

## Installation

Visit the [Alacritty releases page](https://github.com/alacritty/alacritty/releases) and choose your preferred installation method:

- **Installer**: Standard Windows installer
- **Portable**: Single standalone executable (my preference for simplicity)

## Configuration Setup

Alacritty stores its configuration in `%APPDATA%\alacritty\alacritty.toml` on Windows.

To launch WSL by default, add this to your `alacritty.toml`:

```toml
[terminal.shell]
program = "wsl.exe"
args = ["~"]
```

- `program = "wsl.exe"`: Launches WSL directly
- `args = ["~"]`: Starts in the home directory

## Sharing Config Between Windows and WSL

To access the same config from both Windows and WSL, create a symlink in WSL:

```bash
# Create the config directory in WSL if it doesn't exist
mkdir -p ~/.config/alacritty

# Create a symlink to the Windows config
ln -s /mnt/c/Users/YourName/AppData/Roaming/alacritty/alacritty.toml ~/.config/alacritty/alacritty.toml
```

Now both Windows and WSL share the same configuration file.

## Why Alacritty?

- **Performance**: GPU-accelerated rendering
- **Cross-platform**: Same config on Linux, macOS, and Windows
- **Simplicity**: No tabs, no splits—just a fast terminal
- **Modern features**: True color, OSC 52 clipboard support

## Limitations

Alacritty is intentionally minimal:
- No tabs (use tmux or your window manager)
- No splits (use tmux)
- Configuration is file-based only (no GUI settings)

If you need these features, consider WezTerm or Windows Terminal instead.
