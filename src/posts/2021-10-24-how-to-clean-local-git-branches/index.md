---
title: How to clean local git branches
keywords: git
date: 2021-10-24T14:04:28-0700
---

After working on some projects, my github repository ended up having many branches locally because PR is usually merged in GitHub.

To clean up old branches, I run the following.

```bash
EDITOR='code -w'
git branch -v > /tmp/branches.txt &&
  eval $EDITOR /tmp/branches.txt &&
  cat /tmp/branches.txt | cut -d' ' -f3 | xargs git branch -D
```
