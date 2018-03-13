---
title: How to correctly manage different versions in Ubuntu
date: 2018-03-13
keywords: ubuntu
---

For many programs, it's necessary to install multi versions such as gcc4.8, gcc6, and gcc7 because it's possible that some projects need a different version of the compiler. Even JVM languages, I sometimes need to use Java 8 or Java 9 depending on the project.

## What is /etc/alternatives/ ?

So, what is a correct way of managing these different versioned programs?

Thankfully, Ubuntu makes it easy to manage different versions using `/etc/alternatives`.

```bash
ls -al /etc/alternatives/ | head
```

    total 184
    drwxr-xr-x   2 root root 24576 Mar 13 11:40 .
    drwxr-xr-x 177 root root 12288 Mar 11 23:47 ..
    lrwxrwxrwx   1 root root    45 Apr 26  2017 ABORT.7.gz -> /usr/share/postgresql/9.5/man/man7/ABORT.7.gz
    lrwxrwxrwx   1 root root    21 Mar 14  2017 aclocal -> /usr/bin/aclocal-1.15
    lrwxrwxrwx   1 root root    37 Mar 14  2017 aclocal.1.gz -> /usr/share/man/man1/aclocal-1.15.1.gz
    lrwxrwxrwx   1 root root    55 Apr 26  2017 ALTER_AGGREGATE.7.gz -> /usr/share/postgresql/9.5/man/man7/ALTER_AGGREGATE.7.gz
    lrwxrwxrwx   1 root root    55 Apr 26  2017 ALTER_COLLATION.7.gz -> /usr/share/postgresql/9.5/man/man7/ALTER_COLLATION.7.gz
    lrwxrwxrwx   1 root root    56 Apr 26  2017 ALTER_CONVERSION.7.gz -> /usr/share/postgresql/9.5/man/man7/ALTER_CONVERSION.7.gz
    lrwxrwxrwx   1 root root    54 Apr 26  2017 ALTER_DATABASE.7.gz -> /usr/share/postgresql/9.5/man/man7/ALTER_DATABASE.7.gz

As you can see `/etc/alternatives/` is a **directory** that contains symbolic links to a specific version of the program.

For example,

```bash
ls -al /etc/alternatives/clang
```

    lrwxrwxrwx 1 root root 16 Mar 13 11:22 /etc/alternatives/clang -> /usr/bin/clang-7

You can see that my `clang` is pointing `clang-7.0`. So, you just have to create a symbolic link inside `alternatives` directory, and you will always use the right version.

## How to update /etc/alternatives/?

Ubuntu also comes with `update-alternatives` which is a helper utility to manage `alternatives` symlinks.

### How to set a different version?

`update-alternatives --config XXX` is the basic syntax. For example, if I want to use a different version of gcc, I will do

```bash
update-alternatives --config gcc
```

    There are 4 choices for the alternative gcc (providing /usr/bin/gcc).

      Selection    Path              Priority   Status
    ------------------------------------------------------------
    * 0            /usr/bin/gcc-7     50        auto mode
      1            /usr/bin/gcc-4.8   10        manual mode
      2            /usr/bin/gcc-5     20        manual mode
      3            /usr/bin/gcc-6     30        manual mode
      4            /usr/bin/gcc-7     50        manual mode

    Press <enter> to keep the current choice[*], or type selection number:

### How to add a different version?

If you install with `apt-get`, it's likely you don't need to do anything. However, if you compile from source codes, this has to be done manually.

It can be done easily by typing `update-alternatives --install LINK NAME PATH PRIORITY`.

-   **LINK:** means the default bin path. For example, /usr/bin/java, /usr/bin/gcc
-   **NAME:** refers to the name of program. It's usually the name of a bin file. e.g., gcc, clang, java.
-   **PATH:** means a path to the actual version of the program you wish to register. This will be usually a bin file with version name. For example, /usr/bin/gcc-6, /usr/bin/gcc-4.8.
-   **PRIORITY:** is an integer indicating how to choose a version when there are multiple versions and users did not set a specific version. The highest number will be chosen.

So, it will look like this

```bash
sudo update-alternatives --install /usr/bin/java java /usr/local/java/jre1.7.0_09/bin/java 1
```

## In summary,

### Choose a different version
```bash
sudo update-alternatives --config NAME
```

### Install a new version
```bash
sudo update-alternatives --install LINK NAME PATH PRIORITY
```
