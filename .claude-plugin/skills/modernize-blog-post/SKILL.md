---
name: modernize-blog-post
description: Use this skill when the user asks to "review a blog post", "modernize a post", "improve conversion", "optimize for readers", "make a post better", or wants feedback on blog content effectiveness.
version: 1.0.0
---

# Modernize Blog Post for Conversion

This skill helps review and improve blog posts to maximize reader engagement and conversion while keeping content clear and actionable.

## Core Principles

1. **Accuracy First**: NEVER post false, fake, or unverified information. All code, commands, and technical details must be correct and tested.
2. **TLDR First**: Busy readers want immediate value
3. **Simple Language**: Write like you're explaining to a colleague
4. **Code-First**: Show working code before explaining theory
5. **Clear Structure**: Scannable headers and short paragraphs
6. **Conversions Matter**: Every post should guide readers to next steps

## Review Checklist

### 1. Opening (First 200 words)
- [ ] **Hook**: Does it immediately address a pain point?
- [ ] **Value**: Is it clear what the reader will learn?
- [ ] **TLDR Section**: Copy-paste ready code/commands for people in a hurry

**Bad Opening:**
```
In this post, I will discuss various approaches to solving...
```

**Good Opening:**
```
After debugging this for 3 hours, here's the 2-line fix that solved it:

[code snippet]

Here's why it works...
```

### 2. Structure

**Required Sections:**
1. **TLDR** - Quick solution (copy-paste ready)
2. **The Problem** - Why this matters (2-3 sentences)
3. **The Solution** - Working code with explanation
4. **How It Works** - Break down the code
5. **Common Issues** (if applicable)
6. **What's Next** - Call to action

### 3. Code Snippets

**Always include:**
- Working, copy-paste ready code
- Inline comments for non-obvious parts
- Expected output or behavior
- Common variations

**Format:**
```bash
# Do this (good explanation)
command --flag value

# Not this (why it's wrong)
bad-command
```

### 4. Language & Tone

**Use:**
- "Here's how..."
- "This works because..."
- "You'll need to..."
- Active voice
- Second person (you/your)

**Avoid:**
- "One might consider..."
- "It is recommended that..."
- Passive voice
- Academic jargon
- Unnecessary words

### 5. Conversion Optimization

**Internal Linking:**
- Link to 2-3 related posts
- Use descriptive anchor text
- Place links naturally in content

**Call to Action (end of post):**
- Ask an engaging question
- Suggest next steps
- Invite sharing/comments

**Engagement Hooks:**
- "How many [X] do you have? Run `command` and let me know!"
- "What's your approach? Share in the comments!"

### 6. SEO Basics

**Keywords:**
- Use in title
- Include in first paragraph
- Add to keywords frontmatter

**Meta:**
- Title: Under 60 characters, includes main keyword
- Keywords: 3-6 relevant terms

## Common Improvements

### Problem: Too Much Theory
**Before:**
```
Git branches are pointers to commits in a directed acyclic graph...
```

**After:**
```
You have 50 old branches cluttering your repo. Here's how to clean them:

[code snippet]
```

### Problem: Buried Value
**Before:**
- Long introduction
- Background context
- Eventually gets to solution

**After:**
- Solution first (TLDR)
- Explanation second
- Context last (for those who want it)

### Problem: No Clear Next Step
**Before:**
```
[post ends]
```

**After:**
```
## What's Next?

Try this on your repo and let me know how many branches you cleaned!

Related posts:
- [How to Write Better Git Commits](/posts/git-commits)
- [My Git Workflow](/posts/git-workflow)
```

## Review Process

When reviewing a post, provide:

1. **Quick Assessment** (1-2 sentences)
   - What works well
   - Main opportunity for improvement

2. **Specific Recommendations** (3-5 bullet points)
   - Prioritized by impact
   - Actionable and concrete
   - With examples

3. **Conversion Ideas** (2-3 suggestions)
   - Internal links to add
   - Engagement hooks
   - CTA improvements

4. **Code Snippet Review**
   - Are they copy-paste ready?
   - Do they need more comments?
   - Are there errors?

## Accuracy Requirements

**CRITICAL: All content must be accurate and truthful.**

- **Verify all code**: Every command, code snippet, and technical detail must be correct
- **Test before suggesting**: Don't suggest code that hasn't been verified to work
- **No fake examples**: Use real examples or clearly mark hypothetical scenarios
- **Cite sources**: When referencing tools, versions, or specifications, be accurate
- **Admit uncertainty**: If unsure about something, say so - don't make it up
- **No hallucinated facts**: Don't invent statistics, benchmarks, or claims

**If you're unsure about technical accuracy:**
1. Read the existing code/documentation first
2. Verify with official sources
3. Test commands when possible
4. Ask for clarification rather than guessing

## What NOT to Do

- Don't post false, fake, or unverified information
- Don't make up code examples that don't work
- Don't make posts longer for length's sake
- Don't add complexity that doesn't serve readers
- Don't use jargon without explanation
- Don't bury the solution in paragraphs of theory
- Don't forget the TLDR section

## Success Metrics

A well-optimized post should:
- Get readers to a working solution in < 30 seconds (TLDR)
- Keep readers engaged for 2-3 minutes (if they read full post)
- Drive 1-2 internal link clicks
- Generate comments/questions
- Be sharable (clear value proposition)

## Remember

**The goal is not to impress with complexity—it's to help readers solve their problem fast.**

Every word should either:
1. Move the reader toward a solution
2. Prevent a common mistake
3. Guide them to related content

If a sentence doesn't do one of these, cut it.
