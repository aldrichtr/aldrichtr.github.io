---
title: "Other Infrastructure Testing Tools"
description: "Infrastructure testing tools and systems"
date: 2022-04-22T13:57:43-04:00
draft: true
toc: true
image: "img/post/default.png"
categories:
  - Development
projects:
  - infraspective
series:
  - "intro-to-infraspective"
---

## Automated configuration management

Like most things in IT, there are many tools and system that have overlapping features.
In the area of "infrastructure automation", there are tools that are designed to carry
out a series of functions on a list of targets.  Some noteable tools in this area are
Ansible, Chef, and Puppet.

These tools ***can*** do Infrastructure Testing, but it's not their main purpose.  I
could make this a twenty part series where I talk about all the ways you can include
tests in your Ansible playbooks and incorporate the results to do tasks based on them
but I won't.

## "Pure" Infrastructure testing tools

I haven't done an exhaustive study, but from what I can find, there are a few tools
whose main purpose is testing:

- Serverspec
- Inspec
- Terratest
- goss
