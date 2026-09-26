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

## Deploying to the web

The site is fully prerendered static HTML (see `prerender` in `src/routes/+layout.ts`), so it
deploys to any static host. It is currently set up for [Cloudflare Pages](https://pages.cloudflare.com/),
with CircleCI handling the build and deploy.

### One-time Cloudflare setup

1. Create a Pages project named `jmconwell` in the
   [Cloudflare dashboard](https://dash.cloudflare.com/). The name must match `name` in
   `wrangler.toml`.
2. Attach the `jmconwell.com` custom domain to that project.
3. Create an API token with the **Cloudflare Pages: Edit** permission
   ([instructions](https://developers.cloudflare.com/pages/get-started/direct-upload/)).
4. In the CircleCI project settings, add a context called `cloudflare` containing:

   | Variable                | Value                 |
   | ----------------------- | --------------------- |
   | `CLOUDFLARE_ACCOUNT_ID` | Your account ID       |
   | `CLOUDFLARE_API_TOKEN`  | The token from step 3 |

`account_id` can also be set in `wrangler.toml` if you prefer not to pass it through the
environment.

### Deploying manually

Requires the two environment variables above to be exported.

```bash
npm run build
npx wrangler pages deploy
```

### Deploying through CI

Push to the default branch and the workflow in `.circleci/config.yml` builds and deploys.
The build and deploy are separate jobs so the compiled output is passed along as a workspace
rather than being rebuilt.
