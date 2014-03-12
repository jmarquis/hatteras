Base Template
=============

This is a fork of the [Squarespace Base Template](https://github.com/Squarespace/base-template) specifically tailored to give a jump start to experienced Squarespace template developers, instead of sample content and extra readmes.

This repo also contains config files for NPM, Bower, Grunt and [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task), which is used to dynamically fetch the latest version of [a minimal LESS mixin library](https://github.com/knapsackco/mixins).


Notable Differences
-------------------

### New stuff

- A mostly-blank `default.preset` is added to prevent a weird bug where Style Mode doesn't work.

- NPM, Bower, Grunt and grunt-bower-task are preconfigured to download and place the latest version of Knapsack's minimalist LESS mixin library. If you don't want to use this, you can delete `package.json`, `bower.json` and `Gruntfile.js`.

- A config file for Sublime SFTP is included. If you don't use Sublime SFTP (and you really should), you can delete `sftp-config.json`.

### Markup

- `site.region` is stripped of most boilerplate markup and split into head, content and end regions to make it easier to create more layouts

- collections and navigation block markup is cleaned up

- blog post templates consolidated into `blocks/blog-post.block` (this isn't good for every template, but it's a better starting point than having tons of duplicate lines in `blog.item` and `blog.list`)

### Semantics

- tabs are used for indentation instead of spaces, since any decent text editor can display a tab whichever way a developer wishes (2 or 4 character-width indent)

- JSON files are cleaned up to use standard, consistent formatting

- whitespace in general is cleaned up and made consistent

- HTML comments are removed

- extra readme files are removed

- preference is given to [spinal-case](http://en.wikipedia.org/wiki/Letter_case#Special_case_styles) for identifiers rather than CamelCase, where appropriate
