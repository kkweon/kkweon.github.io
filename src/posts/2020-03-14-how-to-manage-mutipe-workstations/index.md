---
title: How to manage multiple workstations using Ansible.
keywords: Ansible
date: '2020-03-14'
---

## Use Ansible

Thanks to Kubernetes and GCP, I don't use Ansible as often as in the past.
However, it's stil useful to manage multiple environments.

For example, I use Git to mange my dotfiles. And, the following scenario has become very common.

1. Add a new line in .vimrc on one of my laptops.
1. Git commit and push.
1. (a few days later when I am now on my desktop) Git pull to get the latest.

This is a perfect usecase for [Ansible](https://ansible.com)

## Ansible Playbook

Ansible supports a declarative approach, meaning I define the desired state in a yaml file.

Here's an example of one of my playbook that does the following:

1. Run apt update & upgrade
1. Run prod server access (for my work)
1. Pull the latest dotfiles
1. Update neovim (my editor).

```yaml
- hosts: all
  vars_files:
    - ./vault.yaml
  tasks:
    - name: run apt update & upgrade
      shell: |
        apt update && apt upgrade -y
      become: yes

    - name: prodacccess
      expect:
        command: prodaccess
        responses:
          'SSO password for kkweon:': '{{ become_pass }}'

    - name: git pull dotfiles
      shell: |
        cd github/dotfiles && git pull --rebase

    - name: nvim update
      shell: |
        nvim +PlugUpgrade +PlugClean +PlugInstall +PlugUpdate +UpdateRemotePlugins +qa!
```

And, I can simply run the same tasks on all of my workstations by running

```shell
ansible-playbook -i hosts playbook.yaml --ask-vault-pass
```
