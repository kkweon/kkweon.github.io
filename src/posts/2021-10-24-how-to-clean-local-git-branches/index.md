---
title: How to clean local git branches
keywords: git
date: 2021-10-24T14:04:28-0700
---

## Edit

Now, I use the script

```bash
$ cat $(which git-branchclean)

#!/usr/bin/env bash
EDITOR=${EDITOR:-'code --wait'}
git branch -v > /tmp/merged.txt && $EDITOR /tmp/merged.txt && cat /tmp/merged.txt | awk '{{ print $1 }}' | xargs git branch -D
```

Then, you can use

```bash
git branchclean
```

## Original

After working on some projects, my github repository ended up having many branches locally because PR is usually merged in GitHub.

To clean up old branches, I run the following.

```bash
EDITOR='code -w'
git branch -v > /tmp/branches.txt &&
  eval $EDITOR /tmp/branches.txt &&
  cat /tmp/branches.txt | cut -d' ' -f3 | xargs git branch -D
```
