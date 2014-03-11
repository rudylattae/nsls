## Contributing

If you are considering contributing to this project, thanks! Here are some quick pointers to get you
pointed in the right direction. 

### Reporting bugs and requesting features

To report a bug or suggest an improvement, please create an issue in the bug tracker
https://github.com/rudylattae/tote/issues with details of what you would like to see.
I'll take a look at it and if it's a good fit for the project, implement it.

When reporting bugs, I would appreciate it if you:

- Describe the environment in which you observed the bug:
 - Operating system, browser + version, etc.
- Provide clear steps to replicate the bug
- Mention the expected outcome
- Highlight the actual outcome

If you really cannot be bothered to follow the steps above but still really want to bring an
issue to my attention, you may let me know on Twitter [@RudyLattae](http://twitter.com/RudyLattae)
or email me.


## Developing / Hacking

I welcome bugfixes and other helpful patches for features, documentation etc. 

### Git structure and workflow

A few key points about how the source repo is organized and how contributions are merged in.

**next**: this is the development branch. Feature and bug branches are created off this branch. When
a pull request comes in, it is integrated into the `next` branch.

**master**: all realeases are created from master. Before new features and bugfixes are tagged and release,
they have to flow up from feature branches (through pull requests) into `next` then into `master`.

For details on this workflow, **please read[Git workflow for small teams](http://www.joslynesser.com/blog/archives/2010/09/06/git-workflow-for-small-teams/)** by Joslyn Esser. This is pretty much the workflow I use when working on new
features or fixing bugs.

In a nutshell, the idea is that you:

- Fork this repo,
- Create a branch for the feature/bug you are working on
 - Hack away until its all done
- Make sure your branch is in sync with the primary development branch `next`
- Wrap up all your changes into a descriptive commit
- Create a pull request for your contribution


### Versioning style

This project is versioned based on the Semantic Versioning system. When contributing
bug fixes or new features, it helps to be mindful of how it would impact the public API and what 
that means in terms of the resulting version number. Please read http://semver.org/ if you are not
already familiar with it.

### Prerequisites

To setup the project for development on your machine, make sure you have all the prerequisites
listed below installed and setup.

- [Node.js][nodejs]. This is a library destined for the browser, but all the tools I use for,
building and minifying, documenting and creating the website are all node based. 
- [PhantomJS][phantomjs]. A headless browser in which the project specs are run straight int the
command line.
- [Testem][testem]. Runs the specs live in multiple browsers as you develop.
It also runs the specs in "ci" mode (one-off, multiple browsers) and reports on the results.
 - To install as a node module, run: `npm install -g testem`
- [Gulp][gulpjs]. The build automation tool. Reduces most of the complex build workflows
to simple tasks that you run from the command line.
 - To install as a node module, run: `npm install -g gulp`
- [Harp][harpjs]. A deceptively simple static webserver which builds the project website.
 - To install as a node module, run: `npm install -g harp`

Note that technically, I could include `Testem` as a development dependency in the
[`package.json`][package.json], but I think it is better as a global install (for now. I currently
install Testem to my global node_modules space. 

Now, you are ready to hack up a storm.

### Crank the engine

1. Clone this repo, better yet, fork, then clone it into a local directory (the project directory).
1. Go to the project directory and run `npm install`
 - This should install all the development dependencies
2. To confirm that everything is in order, in the project directory, run `gulp`

This runs the default task in the [gulpfile][gulpfile.js] which creates the package, runs the 
specs in phantomjs.

If all goes well and there are no errors, then all is well, you may start coding.

### Specifications (tests) libraries

One more thing:

- [Jasmine][jasmine]. Used to create and execute the specs

### Coding style

I am trying to keep with the essence of https://github.com/rwaldron/idiomatic.js/ .
Please check it out sometime. In general:

- 2 `  ` spaces for indentation (no tabs)
- Use semicolons;
- Commas last,
- Prefer `'` to `"`
- `'use strict';`
- 100 character line length -- let's break some rules!

And one important point:

**Code contributions should come with relevant tests where appropriate.**

Cheers!


[nodejs]: http://nodejs.org/
[phantomjs]: http://phantomjs.org/
[testem]: https://github.com/airportyh/testem
[jasmine]: http://jasmine.github.io/2.0/introduction.html
[gulpjs]: http://gulpjs.com/
[harpjs]: http://harpjs.com/
[package.json]: /package.json
[gulpfile.js]: /gulpfile.js
