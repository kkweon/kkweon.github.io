#!/usr/bin/env bash

TODAY=$(date '+%Y-%m-%d')
NOW=$(date '+%Y-%m-%dT%T%z')
BASE_DIR="src/posts"

TITLE="$1"

if [ -z "$TITLE" ]; then
  echo "$TITLE is not given"
  exit 1
fi

FINAL_PATH_DIR="$BASE_DIR/$TODAY-$TITLE"
mkdir "$FINAL_PATH_DIR"
cat << EOF > "$FINAL_PATH_DIR/index.md"
---
title: $TITLE
keywords:
date: $NOW
---
EOF
