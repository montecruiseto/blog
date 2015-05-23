---
layout: post
title: "Scopemount 3/21 • Galileo"
category: note
plugin: intense
hidden: true
scheme-text: "black"
scheme-link: "darkorange"
scheme-hover: "darkorange"
scheme-bg: "white"
---

This week saw the completion of a third Telescope theme for [Scopemount](http://scopemount.startrack.io/). All themes have now been refactored to Telescope v0.20.4 (Refactorscope), so you can use them in your upgraded app.

### Look

Galileo is a modern Q&A theme, taking some functional and visual cues from Quora and Medium. You can click here for a [demo](http://sm-galileo.meteor.com/).

The theme ships with a colourful sunburst gradient on the side-nav.

<p>
  <img src="/assets/img/Galileo0.png" class="nointense" alt="Image">
</p>

However, if you opt to install the package locally, you can edit the "_colors.less" file and switch to a nice aquamarine gradient by uncommenting the corresponding code.

<p>
  <img src="/assets/img/Galileo1.png" class="nointense" alt="Image">
</p>

Out-of-the box Galileo includes 3 Google webfonts, which is mostly for showcasing purposes. The font "Yesteryear" is only used on the logo. If you are concerned with page load times, feel free to throw out one or more of the webfonts and use standard native fonts by editing "_typography.less".

### Usage

You can install Galileo automagically through [Atmosphere](https://atmospherejs.com/montecruiseto/telescope-theme-sm-galileo):

```bash
$ meteor add montecruiseto:telescope-theme-sm-galileo
```

Alternatively if you want to customize the themes: Download and extract the themes of your choice to your Telescope package directory and run the same command as above. Telescope will look for the local package first and use that one.

Have fun setting up your own Q&A community ;-)
