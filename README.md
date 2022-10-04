# Project Mercy Relief Internal Frontend

## Getting Started

Clone this repo with

> `cd` to your preferred directory
>
> Run `git clone https://github.com/dsc-project-mr/mr-fe-internal.git` if you are using Git HTTPS i.e., Cloning from CLI of your choice.

Ensure you have these installed. I included the version I am currently using but whichever version you are using if it works it should be fine:

1. Yarn - [Installation Details](https://classic.yarnpkg.com/en/docs/install) (I am using v1.22.19)
2. NodeJs - [Installation Details](https://nodejs.org/en/download/) (I am using v18.10.0)

> We will be using yarn instead of npm.
>
> Remember to `yarn install` in the directory to download and install all the dependencies.

Install these extensions (at least for VSCode):

1. Prettier
2. ESLint
3. GitLens

Running the Frontend locally

> `yarn dev`
>
> Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Workflow

From discussions with business team, we will write up our own issues depending on the features/bugs that business side or our side requires. Choose the corresponding issue template. If you would like to or are assigned to an issue, change assingee to yourself.

// TODO Decide on labels to be used when creating issues (e.g. user, donation, content, prority level)

Add the corresponding project

### Branching

We will use the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for our development.

> TLDR: The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase.

To create a new branch for an issue, go to the issue and click `Create a new branch`. The branch will automatically be created for u in the format `issueNum-issue-title`

To decide on creation of issues, or using GitHub's Project Management tool.

## Pre-commit hooks

We are using Husky for pre-commit hooks. Whenever you run `git commit`, the pre-commit hooks will run and raise errors with the files you have changed. Try to fix as many of the issues as possible. If there are rules that was enforced that you think can be relaxed, do let me know so that we can relax the rules.

If you feel that the remaining errors are negligable, you can do `git commit --no-verify` to bypass them.

## Commit Messages (To discuss further)

We will follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for our commit messages.

## Deployment

The project is deployed using Vercel which will automatically deploy a preview of your branch whenever you push to remote.
