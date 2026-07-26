# Deployment

This portfolio is a static website. The deployable site lives in `prototype/`.

## Recommended Setup

- GitHub stores the source code and version history.
- Netlify deploys automatically from GitHub.
- one.com keeps managing the domain DNS for `zen-zhu.com`.

## Netlify Settings

When creating the Netlify site from GitHub:

- Build command: leave empty
- Publish directory: `prototype`

These settings are also defined in `netlify.toml`.

## one.com DNS

After Netlify creates the site, add `zen-zhu.com` in Netlify under:

`Site configuration > Domain management > Add a domain`

Then update DNS in one.com according to the exact records Netlify shows. A common setup is:

- `www` as a CNAME pointing to the Netlify site hostname
- root/apex domain `zen-zhu.com` using Netlify's recommended A records or ALIAS/ANAME option if available

Use Netlify's displayed records as the source of truth, because they can vary by account and setup.

## Normal Update Flow

After the first setup, future updates are:

```bash
git add .
git commit -m "Update portfolio"
git push
```

Netlify will redeploy automatically after each push.

