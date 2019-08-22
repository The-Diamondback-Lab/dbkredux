# Contributing

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes. You'll also find information
on making a pull request.

## Overview

[Prerequisites](#prerequisites)  
[Installing](#installing)  
[Making Changes](#making-changes)  
[Testing](#testing)  
[Documentation](#documentation)  
[Making a Pull Request](#making-a-pull-request)  

## Prerequisites

You'll need to have Node and Git set up on your local machine.

- [Install Node](https://nodejs.org/en/download/)
- [Install Git](https://git-scm.com/downloads)

## Installing

Follow the steps below to get your development environment set up.

1. Open the terminal and and run the following:

    `git clone https://gitlab.com/The-Diamondback-Lab/dbk-redux-frontend.git`

2. Run `npm install` to install the project dependencies.

## Making Changes

This project uses [Zeit Now][1], [Next.js][2], and [Sass][3].

### JavaScript Style

- **2 spaces** – for indentation
- **No unused variables** – this one catches tons of bugs!
- **No semicolons** – It's fine. Really!
- Never start a line with `(` , `[` , or `````
  - This is the only gotcha with omitting semicolons – automatically checked for you!
- **Space after keywords** `if (condition) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.

For a detailed overview of our JavaScript style, visit [**StandardJS**][5].
You'll find not only an overview of Standard Style, but a list of editor plugins
as well.

To configure the linting options for this project, make changes to
`.eslintrc.json` and `.eslintignore` in the project root.

Reference: [Configuring ESLint](https://eslint.org/docs/user-guide/configuring)

#### Directories & Files

**Attention: This section is under construction.**

### User Interface

**Attention: This section is under construction.**

## Testing

For generating sample test data, use [**Mockaroo**][7].

**Snapshot Testing**
Under `tests/__snapshots__`, add `*.snap` file to test your component spec
against. For information on creating Jest Snapshots, please visit [this link][8].

**Running Tests**
When you're ready to test your changes, you have two options:

1. Run `npm test` in your project directory. This run your tests, as well as all
   the tests in the tests in the `tests` directory.
2. Run `jest <test_pattern> --detectOpenHandles`. This will run all tests with a
   name matching `test_pattern`. Example: `jest foo --detectOpenHandles`

## Documentation

Following [JSDoc][9] standards, be sure to document any
functions, classes, and other code you write. It will be reviewed by a reviewer
during your code review, and your pull request will be denied if any code is
improperly documented.

## Creating a Pull Request

**Note: Before creating a new branch and creating a pull request for your
changes, make sure your build passes all unit tests. If you need help, please
create a test file and leave a comment in the test body, making note of any
issues in their respective files. Make sure to label your pull request "help
wanted."**

If you're ready to have your changes reviewed, make sure your code is well
documented, run `npm run lint` to check your code for syntax + styling errors,
and then create a branch for your changes.

### Branch Naming Convention

**`<your_initials>/`**, followed by: **`feature-`**, **`issue-`**, **`hotfix-`**, or **`release-`**.

For example:

```bash
  git checkout -b ld/feature-docs
  git commit -am "added documentation"
  git push
```

## Submit for Review

- Use [**this template**][10]
- Label your pull request as `pull request` and `needs review`
- Prefix your pull request title with `PR  -`
- Assign the task to yourself and the appropriate reviewer

[1]: https://zeit.co
[2]: https://nextjs.org
[3]: https://sass-lang.com/
[4]: https://babeljs.io/docs/en/#jsx-and-react
[5]: https://standardjs.com
[6]: http://atomicdesign.bradfrost.com/chapter-2/
[7]: https://mockaroo.com/
[8]: https://jestjs.io/docs/en/snapshot-testing
[9]: https://jsdoc.app/
[10]: ./pull_request_template.md
