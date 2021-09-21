#!/usr/bin/env bash

TODAY=$(date '+%Y-%m-%d')
NOW=$(date '+%Y-%m-%dT%T%z')
BASE_DIR="src/posts"

# TITLE="Hello world"
TITLE="${1^}"
# TITLE_TEMP="Hello-world"
TITLE_TEMP=${TITLE// /-}
# TITLE_HYPHEN="hello-world"
TITLE_HYPHEN=${TITLE_TEMP,,}

if [ -z "$TITLE_HYPHEN" ]; then
  echo "$TITLE_HYPHEN is not given"
  exit 1
fi

FINAL_PATH_DIR="$BASE_DIR/$TODAY-$TITLE_HYPHEN"
mkdir "$FINAL_PATH_DIR"
cat << EOF > "$FINAL_PATH_DIR/index.md"
---
title: $TITLE
keywords:
date: $NOW
---
EOF
