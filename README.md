# quasar-ssr-netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/222edc1c-8300-48c4-8102-73c5aa5f5c98/deploy-status)](https://app.netlify.com/sites/quasar-serverless-side-rendering/deploys)

https://www.netlify.com/blog/2018/09/13/how-to-run-express.js-apps-with-netlify-functions/
https://github.com/neverendingqs/netlify-express/blob/master/express/server.js
https://quasar.dev/quasar-cli-webpack/developing-ssr/ssr-production-export
https://github.com/netlify/netlify-lambda

### Inspired by

https://github.com/antfu/vitesse

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit j0hnfl0w/quasar-ssr-netlify my-app
cd my-app
yarn # If you don't have pnpm installed, run: npm install -g pnpm
```

### Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Clean up the READMEs and remove routes

### Roadmap

- [ ] Build render function with netlify-lambda => yarn build:l BROKEN
- [ ] Serve project with netlify dev BROKEN
- [ ] Implement the Nuxt3 style netlify deploy, how they did it?
