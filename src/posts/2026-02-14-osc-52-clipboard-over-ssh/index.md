---
title: "OSC 52: Clipboard over SSH"
description: Learn how to synchronize your remote SSH clipboard with your local system using the OSC 52 escape sequence.
keywords: til, linux, ssh, clipboard
date: 2026-02-14
---

The problem: copying text from a remote SSH session is surprisingly annoying.
1.  Mouse selection breaks in `tmux` split panes or when line numbers are enabled.
2.  X11 forwarding (`ssh -X`) is slow and insecure.

The solution: **OSC 52**.

OSC 52 is an ANSI escape sequence that tells the *terminal emulator* to write data to the *local* system clipboard. It works entirely over the existing SSH text stream.

## The Magic Command

Try this in your terminal (if supported):

```bash
printf "\033]52;c;$(printf "Hello World" | base64)\a"
```

This base64 encodes the text "Hello World" and wraps it in the OSC 52 sequence.

### How it works

The sequence `\033]52;c;...` breaks down as follows:

- `\033]`: The **OSC** (Operating System Command) escape character.
- `52`: The code for **clipboard operations**.
- `c`: Selects the **system clipboard** (`p` would select the primary selection).
- `base64`: The payload must be base64 encoded to handle special characters (like newlines).
- `\a`: The **BEL** character, which terminates the sequence.

## Tmux

To make OSC 52 work inside Tmux, add these lines to your `~/.tmux.conf`:

```tmux
set -g set-clipboard on
set-window-option -g allow-passthrough on
```

- `set-clipboard on`: Tells tmux to send escape sequences to the terminal.
- `allow-passthrough on`: Ensures escape sequences are passed through to the outer terminal emulator.

## Vim / Neovim

The easiest way to set this up is using the [vim-oscyank](https://github.com/ojroques/vim-oscyank) plugin.

In your `vimrc` / `init.vim`:

```vim
" Copy to system clipboard with <leader>c
vnoremap <leader>c :OSCYank<CR>
```

## Supported Terminals

*   iTerm2
*   Alacritty
*   Kitty
*   Windows Terminal
*   WezTerm
*   Chrome OS Terminal

*Note: GNOME Terminal requires a patch or a plugin.*
