---
title: How to manage dotfiles
date: 2017-12-22
---

A few years ago, I learned how to mange dotfiles from
[HN post](https://news.ycombinator.com/item?id=11070797). It’s amazing, but
I tend to forget from time to time. So, I am leaving it here

## When initializing

This is the first step to manage your dotfiles. The idea is clever.

```bash
git init --bare $HOME/.myconf
alias config='/usr/bin/git --git-dir=$HOME/.myconf/ --work-tree=$HOME'
config config status.showUntrackedFiles no
```

1.  You initialize your home directory as a git repository.
2.  But your git information is stored in `$HOME/.myconf`. Hence, no
    alias or link is necessary

Then you manage like normal git repository.

```bash
config status
config add .vimrc
config commit -m "Add vimrc"
config add .bashrc
config commit -m "Add bashrc"
config push
```

## When installing on your new system

Make sure you push to your remote server. I used gitlab private.

```bash
git clone --bare <git-repo-url> $HOME/.myconf
alias config='/usr/bin/git --git-dir=$HOME/.myconf/ --work-tree=$HOME'
config checkout
```

If there is already dotfiles (and there is), there will be conflicts at
checkout step. So, move the current files to back up directories.
