---
title: How to Interactively Clean Up Local Git Branches
keywords: git, git branches, delete unmerged branches, git cleanup, git productivity, git subcommand
date: 2021-10-24T14:04:28-0700
---

## TLDR

**One-time use:**
```bash
git branch -v > /tmp/branches.txt && \
  ${EDITOR:-code --wait} /tmp/branches.txt && \
  cat /tmp/branches.txt | awk '{ print $1 }' | xargs git branch -D
```

**Install as `git branchclean` command:**
```bash
cat > ~/bin/git-branchclean << 'EOF'
#!/usr/bin/env bash
EDITOR=${EDITOR:-'code --wait'}
git branch -v > /tmp/branches.txt && \
  $EDITOR /tmp/branches.txt && \
  cat /tmp/branches.txt | awk '{ print $1 }' | xargs git branch -D
EOF
chmod +x ~/bin/git-branchclean
```

Then run: `git branchclean`

**What it does:** Opens all your branches in your editor. Delete the lines you want to keep. Save and close. Everything else gets deleted.

---

After working on projects for a while, my local repository accumulates dozens of branches—experiments that didn't pan out, features that were abandoned, quick fixes that are no longer relevant, and yes, PRs that were merged on GitHub.

**The problem:** Not all branches get merged. Some are experiments. Some are WIP. Some are "I'll come back to this later" (spoiler: you won't). You can't just delete all unmerged branches automatically because some actually matter.

**The solution:** Interactively review and delete branches in your text editor.

## The Interactive Cleanup Script

Here's the one-liner I use:

```bash
#!/usr/bin/env bash
# Use $EDITOR if set, otherwise default to VS Code
# Note: '--wait' flag is crucial - it tells VS Code to block until you close the file
# Without it, the script continues immediately and deletes everything!
EDITOR=${EDITOR:-'code --wait'}
git branch -v > /tmp/branches.txt && \
  $EDITOR /tmp/branches.txt && \
  cat /tmp/branches.txt | awk '{ print $1 }' | xargs git branch -D
```

**How it works:**

1. `git branch -v` lists all your branches with their last commit
2. Opens in your editor—scroll through and **delete the lines for branches you want to keep**
3. Everything still in the file gets force-deleted with `git branch -D`

The magic is that you **see all your branches in one place** with context (the last commit message). You can quickly scan and decide what's worth keeping, regardless of merge status.

## Making it a Git Subcommand

Save this as `git-branchclean` to make it a custom Git command:

```bash
# Create the script in your PATH
cat > ~/bin/git-branchclean << 'EOF'
#!/usr/bin/env bash
# Use $EDITOR if set, otherwise default to VS Code
# Note: '--wait' flag is crucial - it tells VS Code to block until you close the file
# Without it, the script continues immediately and deletes everything!
EDITOR=${EDITOR:-'code --wait'}
git branch -v > /tmp/branches.txt && \
  $EDITOR /tmp/branches.txt && \
  cat /tmp/branches.txt | awk '{ print $1 }' | xargs git branch -D
EOF

# Make it executable
chmod +x ~/bin/git-branchclean
```

Now you can run it like any git command:

```bash
git branchclean
```

Git automatically finds executables named `git-*` in your PATH and treats them as subcommands.

## Why Interactive Beats Automatic

**Automatic cleanup scripts** typically do:
```bash
# Delete merged branches
git branch --merged | grep -v "main" | xargs git branch -d
```

This misses the reality: **you have unmerged branches that need cleaning too**. And you have unmerged branches you want to keep.

**The interactive approach** lets you:
- See all branches at once (merged and unmerged)
- Review the last commit message for context
- Keep that experimental branch you might revive
- Delete that "quick-test" branch from 6 months ago
- Make decisions with your eyes, not scripts

## Workflow Example

When I run `git branchclean`, my editor opens with something like:

```
  feature-auth-refactor    a1b2c3d Refactor auth middleware
  old-experiment          e4f5g6h Try alternative approach
* main                    i7j8k9l Merge PR #45
  quick-test              m1n2o3p Test cache behavior
  feature-new-ui          p4q5r6s WIP: redesign dashboard
```

I scan through and delete the lines for branches I want to keep (main, feature-new-ui). Save and close. Everything else gets deleted—merged or not.

## Customizing Your Editor

The script uses `$EDITOR` environment variable, defaulting to VS Code. Set it in your shell config:

```bash
# ~/.bashrc or ~/.zshrc
export EDITOR='vim'              # Vim - already blocks by default
export EDITOR='code --wait'      # VS Code - needs --wait
export EDITOR='nano'             # Nano - already blocks by default
export EDITOR='subl --wait'      # Sublime - needs --wait
```

### Why `--wait` Matters

The `--wait` flag is **critical** for GUI editors like VS Code and Sublime Text. Here's why:

**Without `--wait`:**
```bash
code /tmp/branches.txt  # Opens file and returns immediately
# Script continues → reads empty/unchanged file → deletes ALL branches!
```

**With `--wait`:**
```bash
code --wait /tmp/branches.txt  # Opens file and BLOCKS
# You edit the file...
# You save and close the tab...
# NOW the script continues with your changes
```

Terminal editors like vim and nano block automatically, so they don't need this flag. But GUI editors open in a separate process and return immediately unless you tell them to wait.

**Test if your editor needs `--wait`:**
```bash
# This should block until you close the file
$EDITOR /tmp/test.txt && echo "Editor closed!"

# If you see "Editor closed!" immediately, you need --wait
```

## Safety Note

This uses `git branch -D` (force delete), so it will delete unmerged branches. That's the whole point—but it means:

- **Review carefully** in the editor
- **Don't delete** the line with `*` (your current branch)
- **Keep** main/master/develop

If you accidentally delete something, you can usually recover it with:
```bash
git reflog                      # Find the commit hash
git branch branch-name <hash>   # Restore the branch
```

## Why This Works

The beauty is in the simplicity:
- No external tools
- No complex flags
- Just your editor and a clear list
- You control everything

I've been using this for years and cleaned up hundreds of branches across dozens of repos. The interactive review takes 30 seconds but gives me confidence that I'm only deleting what I actually want to delete.

**How many branches do you have right now?** Run `git branch | wc -l` and see!
