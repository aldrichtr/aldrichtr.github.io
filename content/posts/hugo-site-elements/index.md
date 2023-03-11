---
title: "Hugo Site Elements"
description: "Organizing hugo site content with sections, types and taxonomy terms"
featuredImage: "featured.png"
date: 2022-04-18T11:36:30-04:00
draft: true
categories:
- Development
tags:
- hugo
---


## Sections

The first (and most obvious) way to organize content is using the folder system under the `content/` directory.
When hugo builds your site those folders are the first level that is used for layouts, page elements, etc.  Meaning
the page:
``` sh
./content/post/hello-world.md
```
You can use this folder structure methodology to give sections unique page elements (using layouts) and add menu
items to a list of content in that section.

### Subsections

While a **section** is the first folder below `content/`, hugo also allows you to nest subsequest sections below
them.  Simply add the folders and then add an `_index.md` file to the subfolder, like:

``` sh
./content/post/hugo/sections/subsections/_index.md
```

## Types

Another way to organize content is by specifying a content type in the pages front-matter.  If no type is set, hugo
uses the section to identify the content type.

## Taxonomy

by specifying terms and values, you can create a taxonomy for your site.  the best example of this is on the hugo
site itself:

Kind | Description | Example
--|--|--
home | The landing page for the home page | /index.html
page | The landing page for a given page | my-post page (/posts/my-post/index.html)
section | The landing page of a given section | posts section (/posts/index.html)
taxonomy | The landing page for a taxonomy | tags taxonomy (/tags/index.html)
term | The landing page for one taxonomy’s term | term awesome in tags taxonomy (/tags/awesome/index.html)
