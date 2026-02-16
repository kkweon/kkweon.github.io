---
title: "Ubuntu: Switch Between Multiple Versions of gcc, Java, and Python"
date: 2018-03-13
keywords: ubuntu, update-alternatives, version management, linux, gcc, java, python
---

**TLDR:** Use Ubuntu's `update-alternatives` system to manage multiple versions of programs (gcc, Java, Python, etc.):

```bash
# Switch between installed versions
sudo update-alternatives --config gcc

# Register a new version
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-14 60

# Remove a version
sudo update-alternatives --remove gcc /usr/bin/gcc-14
```

---

For many programs, it's necessary to install multiple versions. For example, you might need gcc-11, gcc-13, and gcc-14 because different projects require different compiler versions. Similarly, you might need Java 17, Java 21, and Java 25 depending on your project requirements, or Python 3.10, 3.11, and 3.12 for different applications.

## What is /etc/alternatives/?

So, what's the correct way of managing these different versioned programs?

Thankfully, Ubuntu (and Debian-based systems) make it easy to manage different versions using the `/etc/alternatives` system.

```bash
ls -al /etc/alternatives/ | head
```

    total 184
    drwxr-xr-x   2 root root 24576 Feb 16 10:30 .
    drwxr-xr-x 177 root root 12288 Feb 15 14:20 ..
    lrwxrwxrwx   1 root root    21 Jan 15  2026 aclocal -> /usr/bin/aclocal-1.16
    lrwxrwxrwx   1 root root    37 Jan 15  2026 aclocal.1.gz -> /usr/share/man/man1/aclocal-1.16.1.gz
    lrwxrwxrwx   1 root root    15 Feb  1  2026 gcc -> /usr/bin/gcc-13
    lrwxrwxrwx   1 root root    18 Feb  1  2026 python3 -> /usr/bin/python3.12
    lrwxrwxrwx   1 root root    16 Jan 20  2026 java -> /usr/bin/java-21
    lrwxrwxrwx   1 root root    19 Jan 22  2026 clang -> /usr/bin/clang-18

As you can see, `/etc/alternatives/` is a **directory** that contains symbolic links to specific versions of programs.

For example,

```bash
ls -al /etc/alternatives/gcc
```

    lrwxrwxrwx 1 root root 15 Feb 16 10:30 /etc/alternatives/gcc -> /usr/bin/gcc-13

You can see that `gcc` is pointing to `gcc-13`. By creating symbolic links inside the `alternatives` directory, the system always uses the correct version when you run the generic command.

## How to update /etc/alternatives/?

Ubuntu also comes with `update-alternatives` which is a helper utility to manage `alternatives` symlinks.

### How to set a different version?

The basic syntax is `sudo update-alternatives --config <name>`. For example, to switch between different versions of gcc:

```bash
sudo update-alternatives --config gcc
```

    There are 4 choices for the alternative gcc (providing /usr/bin/gcc).

      Selection    Path              Priority   Status
    ------------------------------------------------------------
    * 0            /usr/bin/gcc-14    60        auto mode
      1            /usr/bin/gcc-11    40        manual mode
      2            /usr/bin/gcc-12    50        manual mode
      3            /usr/bin/gcc-13    55        manual mode
      4            /usr/bin/gcc-14    60        manual mode

    Press <enter> to keep the current choice[*], or type selection number:

Simply enter the number corresponding to the version you want to use. The asterisk (`*`) indicates the currently active version.

### How to add a different version?

If you install with `apt` or `apt-get`, it's likely you don't need to do anything—the alternatives are set up automatically. However, if you compile from source or install manually, you'll need to register the version yourself.

Use the syntax: `sudo update-alternatives --install LINK NAME PATH PRIORITY`

- **LINK:** The generic command path that users will type (e.g., `/usr/bin/gcc`, `/usr/bin/java`). This is the symlink that gets created.
- **NAME:** The program name for the alternatives group (e.g., `gcc`, `java`, `python3`). Used to identify this set of alternatives.
- **PATH:** The actual versioned binary that will be executed (e.g., `/usr/bin/gcc-14`, `/usr/bin/java-21`). This is the real executable file.
- **PRIORITY:** An integer indicating preference when in auto mode. Higher numbers have higher priority.

**Why both LINK and PATH matter:** When you type `gcc`, the system follows a chain of symlinks:

```
┌──────────────────────┐
│  Command: gcc        │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  LINK                │
│  /usr/bin/gcc        │
│  (symlink)           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────────┐
│  Alternatives System     │
│  /etc/alternatives/gcc   │
│  (symlink)               │
└──────────┬───────────────┘
           │
           ▼
┌──────────────────────────┐
│  PATH                    │
│  /usr/bin/gcc-14         │
│  (actual binary)         │
└──────────────────────────┘
```

This indirection lets you switch versions by updating the alternatives, without changing your commands or PATH environment variable.

Examples:

```bash
# Register a custom Java 21 installation
sudo update-alternatives --install /usr/bin/java java /usr/local/java/jdk-21/bin/java 100

# Register a custom-built gcc-14
sudo update-alternatives --install /usr/bin/gcc gcc /usr/local/bin/gcc-14 80

# Register Python 3.12
sudo update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.12 120
```

## Common Use Cases

### Managing Java Versions

With multiple Java versions (LTS releases like 17, 21, and the latest), switching is common:

```bash
# List available Java versions
sudo update-alternatives --config java

# Also update javac if you're doing development
sudo update-alternatives --config javac
```

### Managing Python Versions

For Python development across different versions:

```bash
# Switch Python 3 version
sudo update-alternatives --config python3

# For pip
sudo update-alternatives --config pip3
```

### Managing GCC/G++ Versions

When working with projects requiring specific C++ standards:

```bash
# Switch gcc
sudo update-alternatives --config gcc

# Don't forget to also switch g++
sudo update-alternatives --config g++
```

## Pro Tips

- **Auto mode vs Manual mode:** Auto mode automatically selects the highest priority version. Manual mode locks to your selected version even if higher-priority versions are installed later.
- **List all alternatives:** View what's managed with `ls -l /etc/alternatives/`
- **Remove an alternative:** Use `sudo update-alternatives --remove <name> <path>` to unregister a version
- **Query current setting:** Use `update-alternatives --query <name>` to see detailed information about the current configuration

## Summary

### Choose a different version

```bash
sudo update-alternatives --config <name>
```

### Install a new version

```bash
sudo update-alternatives --install <link> <name> <path> <priority>
```

### Remove a version

```bash
sudo update-alternatives --remove <name> <path>
```

The `update-alternatives` system is a powerful and elegant solution for managing multiple versions of programs on Ubuntu and Debian-based systems. It keeps your system organized and makes version switching straightforward.
