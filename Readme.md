# dev-website

## How to run

First, install [Vercel CLI](https://vercel.com/download).

Add `.env` file to root

### Development

```bash
> yarn install
> vc dev
```

### Deployment

#### Staging

```bash
vc
```

This can also be triggered through a commit push to GitHub main branch.

#### Production

```bash
vc --prod
```

## Architecture

### Pure components

Every stateless pure component is found under `./components`.

Every component that has to do with styling the post's markup
is found under `./components/post/`

These components make up the _style guide_ of the application.

### Blog posts

Every blog post is a static page hosted under `pages/$year/`.

This allows every post to load arbitrary modules, have custom layouts
and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the
rest of the site.

An index of all posts is maintained in JSON format as `./posts.json`
for practical reasons.
