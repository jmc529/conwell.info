# jmconwell.com

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/jmc529/conwell.info/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/jmc529/conwell.info/tree/main)

A personal site that showcase some projects, a blog, and anything else I add to it on a whim.
This site has been rewritten a few times; look at the branches for archives of those rewrites.

## Developing

```bash
npm install

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Deploying manually

Requires the two environment variables above to be exported.

```bash
npm run build
npx wrangler deploy
```

### Deploying through CI

Push to the default branch and the workflow in `.circleci/config.yml` builds and deploys.
The build and deploy are separate jobs so the compiled output is passed along as a workspace
rather than being rebuilt.
