---
draft: true
date: {{ .Date }}

# ---------------------------------------------
#region Heading
title: "{{ replace .Name "-" " " | title }}"
subtitle: "Add a subtitle"
description: "Add a description"
author: "{{ .Site.Author.name }}"

#endregion Heading
# ---------------------------------------------
# #region image
featuredImage: featured.png
featuredImagePreview: featured-preview.png

# #endregion image
# ---------------------------------------------


hiddenFromHomePage: false
hiddenFromSearch: false
# metadata
categories: []
tags: []
keywords: []


# ---------------------------------------------
# LoveIt theme features

twemoji: true
ruby: true
fraction: true
fontawesome: true
mapbox: false

---

<!-- Start the post with an introductory paragraph suitable for a summary  -->
