Base Template
=============

This is a fork of the [Squarespace Base Template](https://github.com/Squarespace/base-template) specifically tailored to give a jump start to experienced Squarespace template developers, instead of sample content and extra readmes.


Setup
-----

1. Clone a fork of this repo to your computer.
2. Set up a new Squarespace Developer Platform site as described on the [Developer Platform Setup page](http://developers.squarespace.com/initial-setup/).
3. Fill in your username, password and remote folder for your Squarespace site in `sftp-config.json`.
4. That's it! Use SFTP to push/pull/sync files with Squarespace as you choose.


Notable Differences
-------------------

### Added stuff

- A mostly-blank `default.preset` is added to prevent a weird bug where Style Mode doesn't work.

- The latest version of Knapsack's minimalist LESS mixin library resides in `styles/mixins.lib.less`.

- A config file for Sublime SFTP is included. If you don't use Sublime SFTP (and you really should), you can delete `sftp-config.json`.

### Stylesheets

- `site.less` is replaced by `general.less` and `squarespace.less` (for Squarespace-specific styling). You are encouraged to modularize your LESS into multiple files when reasonable.

- `general.less` contains extremely basic responsive breakpoint variables for use in media queries. Delete them if you don't want them.

- `general.less` implements [global border-box box-sizing](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).

### Javascript

- `site.js` becomes `main.js` and is stripped of comments and cleaned up. You are encouraged to use separate Javascript files for different functionality when reasonable.

### Markup

- `site.region` is stripped of most boilerplate markup and split into head, content and end regions to make it easier to create more layouts.

- Collections and navigation block markup is cleaned up.

- Blog post templates are consolidated into `blocks/blog-post.block` — this isn't good for every template, but it's a better starting point than having tons of duplicate lines in `blog.item` and `blog.list`.

### Semantics

- Tabs are used for indentation instead of spaces, since any decent text editor can display a tab whichever way a developer wishes (2 or 4 character-width indent).

- JSON files are cleaned up to use standard, consistent formatting.

- Whitespace in general is cleaned up and made consistent.

- HTML comments are removed.

- Extra readme files are removed.

- Preference is given to [spinal-case](http://en.wikipedia.org/wiki/Letter_case#Special_case_styles) for identifiers rather than camelCase, where appropriate.
