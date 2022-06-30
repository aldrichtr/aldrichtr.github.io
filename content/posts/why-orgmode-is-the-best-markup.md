---
title: "Why Orgmode Is the Best Markup"
image: 'img/post/org-mode-unicorn.svg'
date: 2022-01-04T14:53:39-05:00
draft: true
tags:
  - orgmode
---

# What is orgmode

If you are an emacs user, then you probably already know about
[orgmode](https://orgmode.org).  But, if you haven't heard of it before then
here's a bit about the markup language:

At it's core, orgmode is based on a document outline.  A document is divided
into a hierachcial structure using 'headings'.  A heading starts with one or
more '*' characters, like this

```
* A level one heading
** A level two heading
** Another level two heading
```

That in itself is not very impressive (or unique).  But, where orgmode really
shines is in the *metadata* that is embedded in a headline. such as:

- A 'TODO' keyword
- A priority
- Tags
- Progress "cookie"

So a very natural-language task list can be created like so:

```
* TODO [#A] Throw a surprise party for Joanne [25%]   :@family:
** DONE Call Thomas about the guest house
** TODO Order the cake from that bakery over on 6th Ave
** TODO See if Mike will DJ the event
** TODO Call the caterer
```

Even without a parser, it is very simple to read this.  But
Emacs (and any other orgmode parser) can pick up on this meta data and create
task lists, reminders, kanban boards etc.

two additional metadata components that are worth mentioning here are:

- Planning
- Property drawers

## Planning

Planning lines range from a very simple timestamp

```
<2022-01-04 Tue>
```

to very sophisticated scheduling information

```
SCHEDULED: <2022-01-06 Thu +2d>
```

## Property drawers

Property drawers provide a structured way to include any key/value to headlines
like so:

```
:PROPERTIES:
:CATEGORY: Gardening
:END:
```
