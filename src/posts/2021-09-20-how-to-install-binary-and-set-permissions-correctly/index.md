---
title: How to install binary with the permission set correctly
keywords:
date: 2021-09-20T17:07:19-0700
---

## TL;DR

I've been usually doing manually `cp` and `chmod a+x` something like that.
But, you can simply `install`.

```bash
sudo install -o root -g root -m 0755 kustomize /usr/local/bin/kustomize
```
